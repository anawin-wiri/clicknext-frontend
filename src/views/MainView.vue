<script setup lang="ts"></script>
<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="d-flex align-center">
          <v-col cols="auto" class="d-flex align-center">
            <v-avatar color="blue" class="mx-4 my-2">A</v-avatar>
          </v-col>
          <v-col>
            <h4 class="text-blue">ยินดีต้อนรับ</h4>
            <p class="text-white">คุณ ไพศาล เสนาะเสนาะ</p>
          </v-col>
        </v-row>
        <v-card class="rounded-card mt-2">
          <v-row>
            <v-col cols="6">
              <v-img
                src="https://demo-point-insurance.clicknext.com/images/badge_champion.svg"
                class="small-img mx-4"
                height="65"
                width="65"
                contain
              ></v-img>
            </v-col>
            <v-col cols="6" class="d-flex justify-end my-5">
              <div class="mr-4">
                <span class="bold-text">8040</span> <span class="small-text">คะแนน</span>
              </div>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center mx-4">
            <v-progress-linear
              bg-color="grey"
              buffer-color="green"
              buffer-opacity="30"
              buffer-value="250"
              color="blue"
              height="9"
              max="500"
              min="0"
              model-value="2"
              rounded
            ></v-progress-linear>
            <div class="ms-4">Elite</div>
          </v-row>
          <v-row class="d-flex align-center justify-center my-5">
            <div class="d-flex align-center">
              <v-img
                src="https://demo-point-insurance.clicknext.com/images/run-1.svg"
                class="mx-2"
                height="20"
                width="20"
                contain
              ></v-img>
              Burn อีก 300 kcal เพื่อเลื่อนระดับเป็น
              <v-img
                src="https://demo-point-insurance.clicknext.com/images/star-1.svg"
                class="mx-2"
                height="20"
                width="20"
                contain
              ></v-img>
              Elite
            </div>
          </v-row>
        </v-card>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-card
              class="rounded-card d-flex flex-column align-center justify-center"
              width="100%"
            >
              <v-card-text class="d-flex align-center justify-center">
                <v-img
                  src="/wired-flat-646-walking-walkcycle-person-2.gif"
                  class="small-img"
                  height="65"
                  width="65"
                  contain
                ></v-img>
              </v-card-text>
              <v-card-text class="small-text custom-padding">Step count</v-card-text>
              <v-card-text class="bold-text custom-padding my-1">6210</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center"> 2 </v-col>
          <v-col cols="4" class="d-flex align-center justify-center"> 3 </v-col>
        </v-row>
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
  height: 140px; /* กำหนดความสูงของพื้นหลังให้เป็น 100px */
}

.content-margin {
  margin: 0 16px; /* เพิ่มระยะห่างด้านซ้ายและขวา */
  padding: 16px; /* เพิ่มระยะห่างด้านใน */
}

.rounded-card {
  border-radius: 16px; /* ปรับค่าให้เหมาะสมกับความโค้งที่ต้องการ */
}

.bold-text {
  font-weight: bold; /* ทำให้ตัวเลขตัวหนา */
  font-size: 24px; /* ขนาดตัวเลข */
}

.small-text {
  font-size: 18px; /* ขนาดของคำว่า "คะแนน" */
}
.pa-4 {
  padding: 16px; /* กำหนด padding รอบๆ การ์ด */
}
.text-center {
  text-align: center;
}
.custom-padding {
  padding-top: 0px; /* ลด padding ด้านบน */
  padding-bottom: 2px; /* ลด padding ด้านล่าง */
}
</style>
