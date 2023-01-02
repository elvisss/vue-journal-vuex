<template>
  <span class="login100-form-title p-b-41"> Enter </span>
  <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
      <input v-model="userForm.email" class="input100" type="text" placeholder="Email" required />
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
      <input v-model="userForm.password" class="input100" type="password" placeholder="Password" required />
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn">Enter</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'register' }">No account yet?</router-link>
    </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

export default {
  setup() {
    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
      email: 'test@test.com',
      password: '123456'
    })

    return {
      userForm,
      onSubmit: async() => {
        const { ok, message } = await loginUser(userForm.value)
        console.log({ ok, message })
        if (!ok) {
          Swal.fire('Error', message, 'error')
          return
        }

        if (ok) {
          router.push({ name: 'no-entry' })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
