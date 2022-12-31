<template>
  <div @click="goTo" class="entry-container mb-3 pointer p-2" :class="selected ? 'selected' : ''">
    <div class="entry-title d-flex align-items-end">
      <span class="text-success fs-5 fw-bold">{{ dayMonthYear.day }}</span>
      <span class="mx-1 fs-5">{{ dayMonthYear.month }}</span>
      <span class="mx-2 fw-light">{{ dayMonthYear.year }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDayMonthYear from '../helpers/getDayMothYear'

export default {
  props: {
    entry: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goTo() {
      this.$router.push({
        name: 'daybook-entry',
        params: { daybookid: this.entry.id }
      })
    }
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + '...'
        : this.entry.text
    },
    dayMonthYear() {
      return getDayMonthYear(this.entry.date)
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &.selected {
    background-color: #09482b;
  }

  &:hover {
    background-color: lighten($color: black, $amount: 20);
  }
}

.entry-description {
  font-size: 12px;
}
</style>
