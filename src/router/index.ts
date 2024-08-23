import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/main',
      name: 'main',
      meta: { requiresAuth: true },
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: { requiresAuth: true },
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      component: () => import('../views/ProfileView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // ตรวจสอบ token ใน localStorage

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // ถ้าหน้าต้องการการยืนยันตัวตน แต่ยังไม่ได้ล็อกอิน
    if (!isAuthenticated) {
      next({ name: 'login' }); // ส่งไปที่หน้า Login
    } else {
      next(); // อนุญาตให้เข้าไปในหน้าได้
    }
  } else {
    next(); // อนุญาตให้เข้าไปในหน้าได้
  }
});

export default router
