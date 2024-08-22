<script setup lang="ts">
import LoginView from './views/LoginView.vue'
import MainView from './views/MainView.vue'
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <Navigation />
  </v-app>
</template>
