import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import authRouter from '../modules/auth/router'
import dayBookRouter from '../modules/daybook/router'

import authGuard from './guards/auth-guard'
import noAuthGuard from './guards/no-auth-guard'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/auth',
      beforeEnter: [ noAuthGuard ],
      ...authRouter
    },
    {
      path: '/daybook',
      beforeEnter: [ authGuard ],
      ...dayBookRouter
    },
  ]
})

export default router
