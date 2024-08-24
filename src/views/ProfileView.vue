<script setup lang="ts">
import type User from '@/types/user'
import userService from '@/services/user'
import { ref, onMounted } from 'vue'
import { mdiTicket, mdiCreditCardScanOutline } from '@mdi/js'
import router from '@/router'
const user = ref<User>()
const currentUser = ref<User>()
onMounted(async () => {
  currentUser.value = await userService.getCurrentUser()
  const response = await userService.findOne(currentUser.value!.userId)
  user.value = response.data as User
})
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>
<template>
  <v-app>
    <v-main>
      <v-container class="my-16" fluid>
        <v-card
          style="position: static; border-bottom: none"
          width="100%"
          height="320px"
          class="rounded-card"
        >
          <v-row justify="center" align="center">
            <v-avatar
              size="70"
              style="position: absolute; margin-top: 0px; border: 3px solid white"
            >
              <v-img src="https://demo-point-insurance.clicknext.com/images/6s.png"></v-img>
            </v-avatar>
          </v-row>
          <v-row justify="center" align="center" class="mt-14 bold-text">{{
            `${'สวัสดี'} ${'คุณ'}${user?.userFirstName} ${user?.userLastName}`
          }}</v-row>
          <v-row justify="center" align="center" class="mt-4">{{ `${user?.userId}` }}</v-row>
          <v-row justify="center" align="center" class="mt-4 mb-5">
            <a href="" style="color: #007bff; text-decoration: none">ดูโปรไฟล์ของฉัน ></a>
          </v-row>
          <v-row>
            <v-card class="gradient-card mx-auto" width="97%" height="90">
              <v-card-title justify="center" align="center" style="color: black">{{
                `${user?.userPoints} ${'คะแนน'}`
              }}</v-card-title>
              <v-card-text justify="center" align="center" style="color: black">
                สะสมคะแนนที่ได้รับเพื่อแลกสิทธิพิเศษมากมาย
              </v-card-text>
            </v-card>
          </v-row>
          <v-row justify="center" align="center" class="mt-10">
            <v-col justify="center" align="center">
              <v-icon size="30px" color="#007bff">{{ mdiTicket }}</v-icon>
              My Reward
            </v-col>
            <v-divider vertical></v-divider>
            <v-col justify="center" align="center">
              <v-icon size="30px" color="#007bff">{{ mdiCreditCardScanOutline }}</v-icon>
              Earn Point
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <v-container fluid>
        <v-card
          width="100%"
          height="260px"
          class="rounded-card"
          style="border-radius: 16px; box-shadow: #edf2ff"
        >
          <v-card-title>
            <v-row class="mt-5 ml-4 mb-2">
              <span>
                <v-img
                  src="https://demo-point-insurance.clicknext.com/images/history.svg"
                  width="45px"
                  height="45px"
                ></v-img
              ></span>
              <span class="ml-4 mt-1" style="color: black">ประวัติการสะสมคะแนน </span>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-5 ml-4 mb-2">
              <span>
                <v-img
                  src="https://demo-point-insurance.clicknext.com/images/privacy.svg"
                  width="45px"
                  height="45px"
                ></v-img
              ></span>
              <span class="ml-4 mt-1" style="color: black">นโยบายความเป็นส่วนตัว </span>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-5 ml-4 mb-2">
              <span>
                <a href="#" style="text-decoration: none" @click.prevent="authStore.logout">
                  <v-img
                    src="https://demo-point-insurance.clicknext.com/images/logout.svg"
                    width="45px"
                    height="45px"
                  ></v-img> </a></span
              ><a
                href="#"
                style="text-decoration: none; color: black"
                class="mt-1"
                @click.prevent="authStore.logout"
              >
                <span class="ml-4 mt-1">ออกจะระบบ </span></a
              >
            </v-row>
            <v-divider></v-divider>
          </v-card-title>
        </v-card>
      </v-container>
      <v-container fluid>
        <v-card width="100%" height="60px" class="rounded-card" style="border-radius: 16px">
          <v-row>
            <v-col class="ml-4 mt-4">
              <a href="https://th-th.facebook.com/" style="text-decoration: none">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
                  width="25px"
                  height="25px"
                >
                </v-img
              ></a>
            </v-col>
            <v-col class="mt-4 d-flex justify-center align-center mr-5">
              <a href="https://x.com/?lang=en" style="text-decoration: none" align="center">
                <v-img
                  src="https://w7.pngwing.com/pngs/59/223/png-transparent-bird-tweet-twitter-twitter-logo-social-media-icon-thumbnail.png"
                  width="25px"
                  height="25px"
                  class="d-flex align-center"
                >
                </v-img
              ></a>
            </v-col>
            <v-col class="mt-4 d-flex justify-center align-center"
              ><a href="https://www.whatsapp.com/" style="text-decoration: none" align="center">
                <v-img
                  src="https://static.vecteezy.com/system/resources/previews/021/495/946/original/whatsapp-logo-icon-free-png.png"
                  width="25px"
                  height="25px"
                >
                </v-img></a
            ></v-col>
            <v-col class="mt-4 d-flex justify-center align-center ml-5"
              ><a href="" style="text-decoration: none" align="center">
                <v-img
                  src="https://w7.pngwing.com/pngs/1002/775/png-transparent-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-trademark-thumbnail.png"
                  width="25px"
                  height="25px"
                >
                </v-img></a
            ></v-col>
            <v-col class="mt-4 d-flex justify-end mr-4"
              ><a href="" style="text-decoration: none" align="center">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/480px-Mail_%28iOS%29.svg.png"
                  width="25px"
                  height="25px"
                >
                </v-img></a
            ></v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.v-application {
  background-image: url('https://demo-point-insurance.clicknext.com/images/cover_profile.svg');
  background-size: cover; /* ทำให้ภาพพื้นหลังครอบคลุมทั้งความกว้าง */
  background-position: bottom; /* จัดตำแหน่งภาพพื้นหลังให้อยู่กลาง */
  background-repeat: no-repeat; /* ป้องกันไม่ให้ภาพพื้นหลังถูกทำซ้ำ */
  width: 100%;
  height: 600px; /* กำหนดความสูงของพื้นหลังให้เป็น 100px */
}

.avatar {
  border: 2px solid #edf2ff; /* สีและขนาดของกรอบ */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* เงาของกรอบ */
  border-radius: 50%; /* ทำให้กรอบเป็นวงกลม */
}

.avatar-text {
  color: white; /* กำหนดสีตัวอักษรใน avatar */
}
.rounded-card {
  border-radius: 8px; /* ปรับค่าให้เหมาะสมกับความโค้งที่ต้องการ */
}

.gradient-card {
  background: linear-gradient(to top, #edf2ff, #ffffff);
  color: white;
  border: 1px solid #ffffff;
}
.bold-text {
  /* ทำให้ตัวเลขตัวหนา */
  font-size: 20px; /* ขนาดตัวเลข */
}
</style>
