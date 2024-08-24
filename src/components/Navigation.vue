<script setup lang="ts">
import { mdiHomeOutline, mdiStarSettingsOutline, mdiAccountOutline } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)

// This ensures that the first button (Home) is active by default
const setActiveButton = (index: number, path: string) => {
  active.value = index
  router.push(path)
}
</script>

<template>
  <v-bottom-navigation
    app
    grow
    class="custom-bottom-navigation"
    style="width: 94%; margin-left: 3%; height: 8%"
  >
    <v-btn
      :class="{ 'active-btn': active === 0 }"
      @click="setActiveButton(0, '/main')"
      class="custom-button"
    >
      <v-icon :color="active === 0 ? '#00FFFF' : '#6633FF'" size="30px">
        {{ mdiHomeOutline }}
      </v-icon>
      <span :class="{ 'active-text': active === 0 }">หน้าหลัก</span>
    </v-btn>

    <v-btn
      :class="{ 'active-btn': active === 1 }"
      @click="setActiveButton(1, '/coupon')"
      class="custom-button"
    >
      <v-icon :color="active === 1 ? '#00FFFF' : '#6633FF'" size="30px">
        {{ mdiStarSettingsOutline }}
      </v-icon>
      <span :class="{ 'active-text': active === 1 }">คูปองของฉัน</span>
    </v-btn>

    <v-btn
      :class="{ 'active-btn': active === 2 }"
      @click="setActiveButton(2, '/profile')"
      class="custom-button"
    >
      <v-icon :color="active === 2 ? '#00FFFF' : '#6633FF'" size="30px">
        {{ mdiAccountOutline }}
      </v-icon>
      <span :class="{ 'active-text': active === 2 }">บัญชี</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.custom-bottom-navigation {
  border-radius: 20px;
  margin-bottom: 5px;
  background: linear-gradient(to top, #edf2ff, #ffffff);
}

.active-btn {
  background-color: rgba(102, 51, 255, 0.5) !important;
  border-radius: 16px;
}
.nav-btn {
  border-radius: 30px; /* Round the corners of the buttons */
  background-color: transparent; /* Remove the default background color */
  color: #6633ff; /* Default color for the text and icon */
}

.active-text {
  color: white !important;
}
.custom-button {
  border-radius: 50px !important; /* เพิ่มความมนของปุ่ม */
  margin: 0 10px; /* เพิ่มระยะห่างระหว่างปุ่ม */
  width: 100px; /* กำหนดขนาดปุ่มให้เล็กลง */
  height: 100px; /* กำหนดขนาดปุ่มให้เล็กลง */
  padding: 10px; /* เพิ่ม padding ในปุ่มเพื่อไม่ให้ไอคอนและข้อความเบียดกัน */
}
</style>
