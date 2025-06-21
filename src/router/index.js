import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // ✅ Ganti jadi "../" karena kamu ada di folder /router

const routes = [
  { path: '/', component: HomeView },
  { path: '/product', component: () => import('../views/ProductView.vue') },
  { path: '/voucher', component: () => import('../views/VoucherView.vue') },
  { path: '/cart', component: () => import('../views/CartView.vue') },
  { path: '/login', component: () => import('../views/LoginView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
