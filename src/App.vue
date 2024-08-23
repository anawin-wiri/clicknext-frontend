<script setup lang="ts">
import LoginView from './views/LoginView.vue'
import MainView from './views/MainView.vue'
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
console.log(localStorage.getItem('token'))
const isLogin = computed(() => {
  return !!localStorage.getItem('token')
})
</script>

<template>
  <v-app>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <Navigation v-if="isLogin" />
  </v-app>
</template>
