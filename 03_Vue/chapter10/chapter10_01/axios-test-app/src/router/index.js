import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/books',
      name: 'BookList',
      component: () => import('../views/BookList.vue'),
    },
  ],
})

export default router
