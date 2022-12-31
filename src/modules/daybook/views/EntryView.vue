<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ dayMonthYear.day }}</span>
        <span class="mx-1 fs-3">{{ dayMonthYear.month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ dayMonthYear.year }}</span>
      </div>
      <div>
        <input
          v-show="false"
          accept="image/png, image/jpeg, image/jpg"
          ref="imageSelector"
          type="file"
          @change="onSelectedImage"
        />

        <button
          v-if="entry.id"
          @click="onDeleteEntry"
          class="btn btn-danger mx-2"
        >
          Borrar
          <font-awesome-icon :icon="['fas', 'fa-trash-alt']" />
        </button>

        <button @click="onSelectImage" class="btn btn-primary">
          Subir Imagen
          <font-awesome-icon :icon="['fas', 'fa-upload']" />
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea
        v-model="entry.text"
        name=""
        id=""
        cols="30"
        rows="3"
        placeholder="What happened today?"
      ></textarea>
    </div>

    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
    />

    <img v-if="localImage" :src="localImage" alt="entry-picture" />

    <Fab icon="fa-save" @on:click="onSaveEntry" />
  </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import getDayMonthYear from '../helpers/getDayMothYear'
import uploadImage from '../helpers/uploadImage'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    dayMonthYear() {
      return getDayMonthYear(this.entry.date)
    }
  },
  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
    loadEntry() {
      this.localImage = null
      this.file = null

      let entry

      if (this.id === 'new') {
        this.entry = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        entry = this.getEntryById(this.id)
        if (!entry) return this.$router.push({ name: 'no-entry' })
        this.entry = entry
      }
    },
    async onSaveEntry() {
      new Swal({
        title: 'Wait please',
        allowOutsideClick: false
      })
      Swal.showLoading()

      const picture = await uploadImage(this.file)
      this.entry.picture = picture

      if (this.entry.id) {
        await this.updateEntry(this.entry)
      } else {
        /* const newId = await this.createEntry({ newEntry: this.entry, uploadImage: this.file }) */
        const newId = await this.createEntry(this.entry)
        this.$router.push({
          name: 'daybook-entry',
          params: { daybookid: newId }
        })
      }

      Swal.fire('Saved', 'Entry saved successfully', 'success')
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: 'Confirm',
        showDenyButton: true,
        // eslint-disable-next-line quotes
        confirmButtonText: "Yes I'm sure"
      })

      if (isConfirmed) {
        new Swal({
          title: 'Wait please',
          allowOutsideClick: false
        })
        Swal.showLoading()
        await this.deleteEntry(this.entry.id)
        this.$router.push({ name: 'no-entry' })
        Swal.fire('Deleted', '', 'success')
      }
    },
    onSelectedImage($event) {
      const file = $event.target.files[0]
      if (!file) {
        this.localImage = null
        this.file = null
        return
      }
      this.file = file
      this.localImage = URL.createObjectURL(file)
    },
    onSelectImage() {
      this.$refs.imageSelector.click()
    }
  },
  created() {
    this.loadEntry()
  },
  watch: {
    id() {
      this.loadEntry()
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  background-color: transparent;
  font-size: 20px;
  border: none;
  height: 100%;
  color: white;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>
