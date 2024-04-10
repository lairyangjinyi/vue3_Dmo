import { createRouter, createWebHistory  } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import {homeLayout, Layout} from '@/router/routerSetting';

// @ts-ignore

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loginIndex'
  },
  {
    path: '/loginIndex',
    name: 'login',
    component: Layout,
    // @ts-ignore
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    // @ts-ignore
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/permissionsManagement',
    name: 'permissionsManagement',
    component: homeLayout,
    children: [
      {
        path: '/menuManagement',
        name:'menuManagement',
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/menu/index.vue')
      },
      {
        path: '/roleManagement',
        name:'roleManagement',
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/role/index.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
