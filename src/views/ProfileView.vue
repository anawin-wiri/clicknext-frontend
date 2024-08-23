<script setup lang="ts"></script>
<template>
  <v-app>
    <v-main>
      <v-container class="my-16">
        <v-row justify="center" align="center">
          <v-avatar class="mx-4 my-2 avatar-border" size="80" color="blue">
            <spam class="avatar-text">A</spam>
          </v-avatar>
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
  height: 600px; /* กำหนดความสูงของพื้นหลังให้เป็น 100px */
}

.avatar {
  border: 2px solid white; /* สีและขนาดของกรอบ */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* เงาของกรอบ */
  border-radius: 50%; /* ทำให้กรอบเป็นวงกลม */
}

.avatar-text {
  color: white; /* กำหนดสีตัวอักษรใน avatar */
}
</style>
