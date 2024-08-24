<script setup lang="ts">
import user from '@/services/user'
import type User from '@/types/user'
import { onMounted, ref } from 'vue'
import userService from '@/services/user'
import rewardService from '@/services/reward'
import type Reward from '@/types/reward'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import type UserReward from '@/types/userReward'
const currentUser = ref<User>()
const rewards = ref<Reward[]>()
const userRewards = ref<UserReward>()
const formatDateToThai = (date: Date) => {
  return format(date, 'dd MMM yy', { locale: th })
}

onMounted(async () => {
  currentUser.value = await userService.getCurrentUser()
  const res = await userService.getUserRewards(currentUser.value!.userId)
  userRewards.value = res.data
  console.log(userRewards.value)
  rewards.value = await rewardService.findAll()
})
</script>
<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        style="
          background-image: url('https://demo-point-insurance.clicknext.com/images/coupon.png');
          background-size: cover;
          background-position: top;
          border-radius: 12px;
          width: 100%;
          height: 130px;
        "
      >
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <div style="font-size: 20px; font-weight: bold; color: aliceblue" class="mt-3">
              คูปองของฉัน
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid style="margin-top: -50px">
        <!-- ใช้ margin-top ลบ -->
        <v-row>
          <v-card width="100%" height="60px" class="custom-bottom">
            <v-row>
              <v-col class="d-flex justify-end mt-3">
                <v-btn style="border-radius: 16px" variant="outlined" color="#4b21ef"
                  >คูปองของฉัน</v-btn
                >
              </v-col>
              <v-col class="mt-3">
                <v-btn style="border-radius: 16px" variant="outlined" color="#4b21ef"
                  >ประวัติการแลก</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-container>
      <v-container>
        <v-slide-group show-arrows>
          <v-row>
            <v-col v-for="reward in rewards" :key="reward.rewardId" cols="6" md="6" lg="6">
              <v-card class="mx-2 my-2 rounded-card" width="100%" @click="">
                <v-img
                  :src="reward.rewardImg"
                  height="250px"
                  width="100%"
                  aspect-ratio="16/9"
                  class="zoom-image"
                  cover
                >
                </v-img>
                <v-card-text>{{ reward.rewardDescription }}</v-card-text>
                <v-card-text
                  :style="{ color: '#9966FF' }"
                  class="bold-text custom-padding-nospacing"
                >
                  {{ `${reward.rewardPoint} ${'คะแนน'}` }}
                </v-card-text>
                <v-card-text class="small-text">
                  {{ `${'หมดอายุ'} ${formatDateToThai(reward.endDate)}` }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-slide-group>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.custom-bottom {
  border-radius: 14px;
  margin-bottom: 5px;
  background: linear-gradient(to top, #edf2ff, #ffffff);
}
</style>
