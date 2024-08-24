<script setup lang="ts">
import { ref } from 'vue'
import { mdiAccountCircleOutline, mdiEyeOff, mdiEye, mdiLockOutline } from '@mdi/js'
import type { VForm } from 'vuetify/components'
const username = ref('')
const password = ref('')
const form = ref<InstanceType<typeof VForm> | null>(null)
const valid = ref(true)
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const reset = () => {
  form.value?.reset()
}

const showPass = ref(false)
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="d-flex flex-column align-center" style="padding-top: 20px">
        <v-card width="100%" max-width="600px" height="auto" class="rounded-card" outlined>
          <v-card-title>
            <v-row class="mt-4 align-center">
              <v-col
                class="font-weight-bold d-flex align-center justify-center"
                style="color: #4b21ef; font-size: 36px"
              >
                Login
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="mt-6">
            <v-form ref="form" v-model="valid">
              <v-text-field
                density="compact"
                placeholder="Email address"
                :prepend-inner-icon="mdiAccountCircleOutline"
                variant="outlined"
                label="Username"
                v-model="username"
                :rules="[(v) => !!v || 'Username is required']"
                color="#4b21ef"
                required
              ></v-text-field>
              <v-text-field
                :type="showPass ? 'text' : 'password'"
                :append-inner-icon="showPass ? mdiEye : mdiEyeOff"
                @click:append-inner="showPass = !showPass"
                density="compact"
                placeholder="Enter your password"
                :prepend-inner-icon="mdiLockOutline"
                variant="outlined"
                label="Password"
                color="#4b21ef"
                v-model="password"
                :rules="[
                  (v) => !!v || 'Password is required',
                  (v) => v.length >= 8 || 'Password must be more than or equal 8 characters'
                ]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center mb-3">
            <v-btn
              rounded="xl"
              color="green"
              @click="authStore.login(username, password)"
              variant="outlined"
              width="200px"
              style="border-radius: 2px; border-color: green"
            >
              LOGIN
            </v-btn>
            <v-btn
              rounded="xl"
              color="error"
              @click="reset"
              variant="outlined"
              width="200px"
              style="border-radius: 2px; border-color: error"
            >
              CLEAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background-image: url('https://demo-point-insurance.clicknext.com/images/cover_profile.svg');
  background-size: cover; /* ปรับขนาดของภาพพื้นหลังให้ครอบคลุมพื้นที่ */
  background-position: center; /* จัดตำแหน่งภาพพื้นหลังให้อยู่กลาง */
  background-repeat: no-repeat;
  min-height: 20vh; /* กำหนดความสูงของพื้นหลังให้เต็มความสูงของหน้าจอ */
}
.rounded-card {
  border-radius: 16px; /* ปรับค่าให้เหมาะสมกับความโค้งที่ต้องการ */
}
</style>
