<script setup lang="ts">
import { mdiHome, mdiStarFourPoints, mdiAccount } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const isActive = ref('home')
const router = useRouter()
</script>

<template>
  <v-bottom-navigation
    app
    color="deep-purple accent-4"
    dark
    fixed
    class="rounded-card my-5 mx-auto"
  >
    <v-btn @Click="router.push('/main')">
      <v-icon size="30px" color="#6633FF">{{ mdiHome }}</v-icon>
      หน้าหลัก
    </v-btn>
    <v-btn @Click="router.push('/detail')">
      <v-icon size="30px" color="#6633FF">{{ mdiStarFourPoints }}</v-icon>
      สะสมพอยท์
    </v-btn>
    <v-btn @Click="router.push('/profile')">
      <v-icon size="30px" color="#6633FF">{{ mdiAccount }}</v-icon>
      บัญชี
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.rounded-card {
  border-radius: 20px;
}
</style>
