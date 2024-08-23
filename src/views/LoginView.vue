<script setup lang="ts">
import { ref } from 'vue'
import { mdiAccount, mdiLock, mdiEye, mdiEyeOff } from '@mdi/js'
import type { VForm } from 'vuetify/components'
const username = ref('')
const password = ref('')
const form = ref<InstanceType<typeof VForm> | null>(null)
const valid = ref(true)
import authService from '@/services/auth'
import router from '@/router'
import type { get } from 'http'
const reset = () => {
  form.value?.reset()
  localStorage.removeItem('token')
  window.location.reload()
}
const login = async () => {
  const { valid } = await form.value!.validate()
  if (valid) {
    try {
      const res = await authService.login(username.value, password.value)
      localStorage.setItem('token', res.data.access_token)
      console.log(localStorage.getItem('token'))
      router.push('/main').then(() => {
        window.location.reload()
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <v-app>
    <v-main class="pa-16 bg-">
      <v-card width="400px" class="mx-auto justify-center">
        <v-card-title primary-title class="text-center text-h5 font-weight-bold fontKanit">
          Login
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Username"
              v-model="username"
              :rules="[(v) => !!v || 'Username is required']"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              :rules="[
                (v) => !!v || 'Password is required',
                (v) => v.length >= 8 || 'Password must be more than or equal 8 characters'
              ]"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="success" @click="login">LOGIN</v-btn>
          <v-btn color="error" @click="reset">CLEAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background-image: url('https://demo-point-insurance.clicknext.com/images/cover_profile.svg');
  background-size: cover; /* ปรับขนาดของภาพพื้นหลังให้ครอบคลุมพื้นที่ */
  background-position: center; /* จัดตำแหน่งภาพพื้นหลังให้อยู่กลาง */
  background-repeat: no-repeat; /* ป้องกันไม่ให้ภาพพื้นหลังถูกทำซ้ำ */
  min-height: 20vh; /* กำหนดความสูงของพื้นหลังให้เต็มความสูงของหน้าจอ */
}
</style>
