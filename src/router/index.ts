import { createRouter, createWebHistory  } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loginIndex'
  },
  {
    path: '/loginIndex',
    name: 'login',
    // @ts-ignore
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    // @ts-ignore
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
