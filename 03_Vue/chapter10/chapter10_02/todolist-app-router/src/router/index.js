import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/todos',
      name: 'todo-list',
      component: () => import('../pages/TodoList.vue'),
    },
    {
      path: '/todos/add',
      name: 'add-todo',
      component: () => import('../pages/AddTodo.vue'),
    },
    {
      path: '/todos/:id/edit',
      name: 'edit-todo',
      component: () => import('../pages/EditTodo.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue'),
    },
  ],
})

export default router
