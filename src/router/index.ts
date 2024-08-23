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
      path: '/detail/:id',
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
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
