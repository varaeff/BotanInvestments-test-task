import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/BotanInvestments-test-task/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
    },
    {
      path: '/BotanInvestments-test-task/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/BotanInvestments-test-task/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
    },
  ],
})

export default router
