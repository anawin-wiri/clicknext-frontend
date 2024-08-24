<script setup lang="ts">
import userService from '@/services/user'
import type User from '@/types/user'
import { ref, onMounted, computed } from 'vue'
import { mdiKeyboardBackspace, mdiStarFourPointsCircleOutline } from '@mdi/js'
import router from '@/router'
import type Reward from '@/types/reward'
import rewardService from '@/services/reward'
import type UserReward from '@/types/userReward'
const currentUser = ref<User>()
const reward = ref<Reward>()
const user = ref<User>()
const rewardId = router.currentRoute.value.params.id.toString()
const userReward = ref<UserReward>()
onMounted(async () => {
  currentUser.value = await userService.getCurrentUser()
  reward.value = await rewardService.findOne(+rewardId)
  const response = await userService.findOne(currentUser.value!.userId)
  user.value = response.data as User
  const res = await userService.getUserReward(currentUser.value!.userId, reward.value!.rewardId)
  userReward.value = res.data as UserReward
})
const calculate = () => {
  rewardService.reduceAmount(reward.value!.rewardId, {
    rewardAmount: reward.value!.rewardAmount - value.value
  })
  userService.reducePoint(currentUser.value!.userId, {
    userPoints: user.value!.userPoints - reward.value!.rewardPoint * value.value
  })
  userService.userReward({
    userId: user.value!.userId,
    rewardId: reward.value!.rewardId
  })
  router.push('/main')
}
const value = ref(1)

const increment = () => {
  value.value += 1
}

const decrement = () => {
  if (value.value > 0) {
    value.value -= 1
  }
}

const dialog = ref(false)
const openDialog = () => {
  dialog.value = true
}
const confirm = () => {
  calculate()
  dialog.value = false
}

const isButtonDisabled = computed(() => {
  const condition =
    !user.value ||
    !reward.value ||
    user.value.userPoints < reward.value.rewardPoint * value.value ||
    reward.value.rewardAmount < 1 ||
    (user.value.userId === userReward.value?.userId &&
      reward.value.rewardId === userReward.value?.rewardId)
  return condition
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
            >{{ `${user?.userPoints}` }}
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
                ><div style="color: aliceblue" align="center">
                  ใช้ {{ reward?.rewardPoint }} คะแนน
                </div>
                <div style="color: #6bd2b6; font-size: 24px" align="center">รับฟรี</div>
                <div style="color: aliceblue">{{ reward?.rewardDescription }}</div></v-card-item
              >
            </v-card>
          </v-col>
          <v-col>
            <v-card
              style="position: static; border-bottom: none"
              height="250px"
              class="rounded-card"
              ><v-img :src="reward?.rewardImg" width="100%" height="100%" aspect-ratio="16/9" cover>
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
                  {{ (reward?.rewardPoint ?? 0) * value }}
                </div>
              </span>
              <v-spacer></v-spacer>
              <span
                ><div style="color: #868686; font-size: 14px; justify-self: start">ระยะเวลา</div>
                <div
                  style="color: #4b23eb; font-size: 16px; justify-self: start"
                  class="mt-3 mr-10"
                >
                  {{ rewardService.toLocalDate(reward?.startDate, 'short') }} -
                  {{ rewardService.toLocalDate(reward?.endDate, 'short') }}
                </div></span
              >
            </v-row>
            <v-divider style="color: #868686"></v-divider>
            <v-row class="ml-2 mb-2 mt-2">
              <span>
                <div style="color: black; font-size: 14px">จำนวนสินค้า</div>
                <div style="color: #66ff99; font-size: 12px" class="mt-0">
                  (คงเหลือ {{ reward?.rewardAmount }} ชิ้น)
                </div>
              </span>
              <v-spacer></v-spacer>
              <span>
                <div class="mr-16 counter-container">
                  <button @click="decrement">-</button>
                  <input type="number" v-model.number="value" class="counter-input" min="0" />
                  <button @click="increment">+</button>
                </div>
              </span>
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
          ใช้ {{ reward?.rewardPoint }} คะแนน {{ reward?.rewardDescription }}
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
            <li>
              รับสิทธิ์ได้ตั้งแต่
              {{ rewardService.toLocalDate(reward?.startDate, 'long') }} -
              {{ rewardService.toLocalDate(reward?.endDate, 'long') }}
            </li>
            <li>ไม่สามารถใช้รหัสที่เกิดจากการ capture หน้าจอโทรศัพท์มาแสดง เพื่อใช้ขอรับสิทธิ์</li>
            <li>
              ไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสด และไม่สามารถใช้ร่วมกับ ส่วนลดหรือโปรโมชั่นอื่นได้
            </li>
          </ul>
        </div>
      </v-container>
      <v-container
        fluid
        class="d-flex justify-center align-center"
        style="position: fixed; bottom: 0; width: 100%"
        height="80px"
      >
        <v-btn
          :disabled="isButtonDisabled"
          width="100%"
          height="60px"
          style="border-radius: 30px"
          color="#4b21ef"
          @Click="openDialog"
          >แลกสิทธิ์</v-btn
        >
        <v-dialog v-model="dialog" max-width="500px">
          <v-card
            style="border-radius: 18px; border: 1px solid #4b23eb"
            height="200px"
            class="d-flex justify-center align-center"
          >
            <v-card-title class="headline" style="font-size: 28px; color: #07148c"
              >ยืนยันการแลกสิทธิ์</v-card-title
            >
            <v-card-subtitle class="mt-0"> คุณต้องการแลกสิทธิ์นี้หรือไม่? </v-card-subtitle>
            <v-card-actions class="mt-10">
              <v-spacer></v-spacer>
              <v-btn @click="confirm" rounded="xl" color="green" variant="outlined">ยืนยัน</v-btn>
              <v-btn @click="dialog = false" rounded="xl" color="error" variant="outlined"
                >ยกเลิก</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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
.counter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* ระยะห่างระหว่างปุ่มและช่องกรอก */
}

.counter-input {
  width: 60px; /* ขนาดของช่องกรอก */
  text-align: center; /* จัดข้อความให้อยู่กลาง */
  font-size: 16px; /* ขนาดตัวอักษร */
  border-radius: 16px;
  border: 2px solid #4b21ef;
}
</style>
