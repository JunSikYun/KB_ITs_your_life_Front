// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/books',
      name: 'BookList',
      component: () => import('../views/BookList.vue'),
    },
  ],
});

export default router;
