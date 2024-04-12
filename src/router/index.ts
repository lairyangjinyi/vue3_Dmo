import { createRouter, createWebHistory  } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import {homeLayout, Layout} from '@/router/routerSetting';
import authGuard from "@/router/authGuard";

// @ts-ignore
const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/loginIndex',
    name: 'loginIndex',
    component: Layout,
    children: [
      {
        path: '/login',
        name: 'login',
        // @ts-ignore
        component: () => import('@/views/login/index.vue'),
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'] // 受访问限制的角色
        }
      },
      {
        path: '/home',
        name: 'home',
        // @ts-ignore
        component: () => import('@/views/home/index.vue'),
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'] // 受访问限制的角色
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: homeLayout,
    children: [
      {
        path: '/homepage',
        name: 'homepage',
        // @ts-ignore
        component: () => import('@/views/home/components/homePage.vue'),
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'] // 受访问限制的角色
        }
      }
    ]
  },
  {
    path: '/permissionsManagement',
    name: 'permissionsManagement',
    component: homeLayout,
    children: [
      {
        path: '/menuManagement',
        name: 'menuManagement',
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/menu/index.vue'),

      },
      {
        path: '/roleManagement',
        name: 'roleManagement',
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/role/index.vue'),
      },
    ],
  },
  {
    path: '/errorPage',
    name: 'errorPage',
    component: Layout,
    children: [
      {
        path: '/404',
        name: '404',
        // @ts-ignore
        component: () => import('@/views/errorPage/component/notFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(authGuard);

export default router
