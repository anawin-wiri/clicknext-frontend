<script setup lang="ts">
import LoginView from './views/LoginView.vue'
import MainView from './views/MainView.vue'
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <v-app>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <Navigation v-if="route.name !== 'login' && route.name !== 'detail'"></Navigation>
  </v-app>
</template>
