<script setup lang="ts">
import userService from '@/services/user'
import type User from '@/types/user'
import { ref, onMounted } from 'vue'
import { mdiKeyboardBackspace, mdiStarFourPointsCircleOutline } from '@mdi/js'
import router from '@/router'
const currentUser = ref<User>()
onMounted(async () => {
  currentUser.value = await userService.getCurrentUser()
})
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row
          ><span class="ml-3 mt-2">
            <a href="#" style="text-decoration: none" @click.prevent="router.push('/main')">
              <v-icon size="30px" color="black">
                {{ mdiKeyboardBackspace }}
              </v-icon>
            </a>
          </span>
          <span class="ml-3 mt-2" style="color: black; font-size: 17px; font-weight: bold"
            >คะแนนของคุณ
          </span>
          <v-spacer></v-spacer>
          <span class="mr-1 mt-1" style="color: black; font-size: 24px; font-weight: bold"
            >{{ `${currentUser?.userPoints}` }}
          </span>
          <span class="mr-2 mt-4" style="color: black; font-size: 14px; font-weight: bold"
            >คะแนน
          </span>
        </v-row>
      </v-container>
      <v-container
        class="bg-blue"
        fluid
        style="
          background-image: url('https://demo-point-insurance.clicknext.com/images/coupon.png');
          background-size: cover;
          background-position: top;
          width: 100%;
        "
      >
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <v-card
              style="position: static; border-bottom: none; background-color: #07148c"
              width="100%"
              height="250px"
              class="rounded-card d-flex justify-center align-center"
            >
              <v-card-item
                ><div style="color: aliceblue">ใช้ 450 คะแนน</div>
                <div style="color: #6bd2b6; font-size: 24px" align="center">รับฟรี</div>
                <div style="color: aliceblue">ส่วนลด 50 บาท</div></v-card-item
              >
            </v-card>
          </v-col>
          <v-col>
            <v-card
              style="position: static; border-bottom: none"
              height="250px"
              class="rounded-card"
              ><v-img
                src="https://demo-point-insurance.clicknext.com/images/zizler-1.png"
                width="100%"
                height="100%"
                aspect-ratio="16/9"
                cover
              >
              </v-img
            ></v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid
        ><v-card class="gradient-card mx-auto" width="100%">
          <v-card-title>
            <v-row class="mt-1 mb-2">
              <v-icon class="ml-3" size="40px" style="color: #07148c">{{
                mdiStarFourPointsCircleOutline
              }}</v-icon>
              <span>
                <div style="color: #868686; font-size: 14px" class="ml-2 mb-0">ใช้คะแนน</div>
                <div style="color: #4b23eb; font-size: 24px; font-weight: bold" class="ml-4 mt-0">
                  450
                </div>
              </span>
              <v-spacer></v-spacer>
              <span
                ><div style="color: #868686; font-size: 14px; justify-self: start">ระยะเวลา</div>
                <div
                  style="color: #4b23eb; font-size: 16px; justify-self: start"
                  class="mt-3 mr-10"
                >
                  1 ตุลาคม 2565 - 31 ตุลาคม 2565
                </div></span
              >
            </v-row>
            <v-divider style="color: #868686"></v-divider>
            <v-row class="ml-2 mb-2 mt-2">
              <div style="color: black; font-size: 14px">จำนวนสินค้า</div>
              <div style="color: #66ff99; font-size: 12px" class="mt-0">(คงเหลือ 2000 ชิ้น)</div>
            </v-row>
          </v-card-title>
        </v-card></v-container
      >
      <v-container fluid>
        <div
          style="
            color: black;
            font-size: 18px;
            font-weight: bold;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          รายละเอียด
        </div>
        <div style="color: #868686; font-size: 12px; justify-self: start">
          ใช้ 450 คะแนนแลกส่วนลด Sizzler 50 บาท
        </div>
        <div
          style="
            color: black;
            font-size: 18px;
            font-weight: bold;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
          class="mt-3"
        >
          เงื่อนไข
        </div>
        <div style="color: #868686; font-size: 12px; justify-self: start">
          <ul style="padding-left: 20px; margin: 0">
            <li>
              สมาชิกใช้คะแนนสะสม Beger Coin 8,000 คะแนน รับฟรี แลกเครื่องฟอกอากาศ Samsung ลูกค้า 1
              ท่าน สามารถรับสิทธิ์ได้สูงสุด 2 สิทธิ์
            </li>
            <li>ใบเสร็จ และ 2 สิทธิ์/ แคมเปญ</li>
            <li>รับสิทธิ์ได้ตั้งแต่ 1 ตุลาคม 2565 - 31 ตุลาคม 2565</li>
            <li>ไม่สามารถใช้รหัสที่เกิดจากการ capture หน้าจอโทรศัพท์มาแสดง เพื่อใช้ขอรับสิทธิ์</li>
            <li>
              ไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสด และไม่สามารถใช้ร่วมกับ ส่วนลดหรือโปรโมชั่นอื่นได้
            </li>
          </ul>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.rounded-card {
  border-radius: 12px; /* ปรับค่าให้เหมาะสมกับความโค้งที่ต้องการ */
}
.gradient-card {
  background: linear-gradient(to top, #edf2ff, #ffffff);
  color: white;
  border: 1px solid #ffffff;
}
</style>
