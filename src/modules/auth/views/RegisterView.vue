<template>
  <span class="login100-form-title p-b-41"> Register </span>
  <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">
    <div class="wrap-input100 validate-input" data-validate="Enter your name">
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
      <input v-model="userForm.name" class="input100" type="text" placeholder="name" required />
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter your email">
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
      <input v-model="userForm.email" class="input100" type="email" placeholder="Email" required />
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Enter your password"
    >
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
      <input v-model="userForm.password" class="input100" type="password" placeholder="Password" required />
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">Create Account</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">Already signup?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import useAuth from '../composables/useAuth'

export default {
  setup() {
    const router = useRouter()
    const { createUser } = useAuth()

    const userForm = ref({
      name: 'asd',
      email: 'asd@dasd.dssd',
      password: 'asdasd'
    })

    return {
      userForm,
      onSubmit: async() => {
        const { ok, message } = await createUser(userForm.value)

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
