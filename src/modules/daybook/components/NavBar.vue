<template>
  <nav class="navbar bg-primary">
    <router-link class="navbar-brand text-white" :to="{ name: 'home' }">
      <img
        src="@/assets/logo.svg"
        alt=""
        class="d-inline-block align-text-top mx-2"
        height="30"
      />
      {{ username }}
    </router-link>

    <div class="d-flex">
      <button @click="onLogout" class="btn btn-outline-info mx-2">
        <font-awesome-icon :icon="['fas', 'fa-sign-out-alt']" />
      </button>
    </div>
  </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const { logoutUser, username } = useAuth()

    return {
      username,
      onLogout: () => {
        logoutUser()
        router.push({ name: 'login' })
      }
    }
  }
}
</script>
