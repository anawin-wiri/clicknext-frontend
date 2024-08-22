<script setup lang="ts">
const items = [
  {
    promotion: 'แลก 200 คะแนนอัพไซส์เครื่องดื่มจาก M เป็น L',
    src: '/kamu.png',
    point: 200,
    exp: '31 ต.ค. 66'
  },
  { promotion: 'ส่วนลด Sizzler 50 บาท', src: '/img-01.png', point: 250, exp: '31 ต.ค. 66' },
  { promotion: 'ส่วนลด MisterDonut 50 บาท', src: '/donut.png', point: 250, exp: '31 ต.ค. 66' }
]
</script>
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
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-card
              class="rounded-card d-flex flex-column align-center justify-center"
              width="100%"
            >
              <v-card-text class="d-flex align-center justify-center">
                <v-img
                  src="https://demo-point-insurance.clicknext.com/images/icn_kcal.svg"
                  class="small-img"
                  height="65"
                  width="65"
                  contain
                ></v-img>
              </v-card-text>
              <v-card-text class="small-text custom-padding">Burn</v-card-text>
              <v-card-text class="bold-text custom-padding my-1">320 kcal</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-card
              class="rounded-card d-flex flex-column align-center justify-center"
              width="100%"
            >
              <v-card-text class="d-flex align-center justify-center">
                <v-img
                  src="/wired-outline-1249-heart-beat-2.gif"
                  class="small-img"
                  height="65"
                  width="65"
                  contain
                ></v-img>
              </v-card-text>
              <v-card-text class="small-text custom-padding">Heart Rate</v-card-text>
              <v-card-text class="bold-text custom-padding my-1">110 BPM</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="6">
            <h1 class="bold-heading">For You</h1>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-btn variant="plain" class="small-text custom-btn"> See All </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-slide-group show-arrows>
            <v-slide-item v-for="(item, i) in items" :key="i">
              <v-card class="mx-2 my-2 rounded-card" width="400">
                <v-img
                  :src="item.src"
                  height="250px"
                  width="100%"
                  aspect-ratio="16/9"
                  class="zoom-image"
                  cover
                ></v-img>
                <v-card-text class="mt-2">{{ item.promotion }}</v-card-text>
                <v-card-text
                  :style="{ color: '#9966FF' }"
                  class="bold-text custom-padding-nospacing"
                  >{{ item.point + ' คะแนน' }}</v-card-text
                >
                <v-card-text class="small-text">{{ 'หมดอายุ ' + item.exp }}</v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="6">
            <h1 class="bold-heading">Hot Deals!</h1>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-btn variant="plain" class="small-text custom-btn"> See All </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-slide-group show-arrows>
            <v-slide-item v-for="(item, i) in items" :key="i">
              <v-card class="mx-2 my-2 rounded-card" width="400">
                <v-img
                  :src="item.src"
                  height="250px"
                  width="100%"
                  aspect-ratio="16/9"
                  class="zoom-image"
                  cover
                >
                  <div class="overlay">Hot Deals!</div>
                </v-img>
                <v-card-text>{{ item.promotion }}</v-card-text>
                <v-card-text
                  :style="{ color: '#9966FF' }"
                  class="bold-text custom-padding-nospacing"
                  >{{ item.point + ' คะแนน' }}</v-card-text
                >
                <v-card-text class="small-text">{{ 'หมดอายุ ' + item.exp }}</v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
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

.bold-heading {
  font-weight: bold; /* ทำให้ตัวเลขตัวหนา */
  font-size: 30px;
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

.custom-padding-nospacing {
  padding-top: 0px; /* ลด padding ด้านบน */
  padding-bottom: 0px; /* ลด padding ด้านล่าง */
}

.custom-btn {
  text-transform: none; /* ทำให้ตัวอักษรไม่เป็นพิมพ์ใหญ่ทั้งหมด */
  color: rgb(0, 187, 201); /* เปลี่ยนสีตัวอักษรเป็นสีฟ้า */
}
.zoom-image {
  transition: transform 2s ease-in-out;
  animation: zoom 4s infinite;
}
.overlay {
  position: absolute;
  top: 10px; /* ระยะห่างจากด้านบน */
  left: 10px; /* ระยะห่างจากด้านซ้าย */
  background-color: #ff6666; /* พื้นหลังสีดำโปร่งใส */
  color: white; /* สีข้อความ */
  padding: 5px 10px; /* การจัดการระยะห่างภายใน */
  border-radius: 5px; /* ขอบมุมกลม */
  font-size: 16px; /* ขนาดข้อความ */
  border: 2px solid #ffffff;
}

@keyframes zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2); /* ซูมเข้า */
  }
}
</style>
