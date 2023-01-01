<template>
  <div class="limiter">
    <div
      class="container-login100"
      :style="{ backgroundImage: `url(${bgPath})` }"
    >
      <div class="wrap-login100 p-t-30 p-b-50">
        <span class="login100-form-title p-b-41"> Enter </span>
        <form class="login100-form validate-form p-b-33 p-t-5">
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            <input class="input100" type="text" placeholder="Email" required />
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
            <input
              class="input100"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div class="container-login100-form-btn m-t-32">
            <button class="login100-form-btn">Login</button>
          </div>

          <div class="container-login100-form-btn m-t-32">
            <router-link :to="{}">¿No tienes cuenta?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgPath from '@/assets/bg-01.jpg'
</script>

<style lang="scss" scoped>
@import '../css/auth.css';
@import '../css/util.css';
</style>
