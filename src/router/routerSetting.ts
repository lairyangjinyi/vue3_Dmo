/*
* @Author: yangli
* @createDate: 2024/4/10 11:24
* @description: 路由设置
*/

import type {RouteRecordRaw} from 'vue-router';
import router from '@/router';

// 路由显示为全屏
// @ts-ignore
export const Layout: any = () => import('@/App.vue');

// 路由显示为首页main组件
// @ts-ignore
export const homeLayout: any = () => import('@/views/home/index.vue');


// @ts-ignore
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/loginIndex',
    name: '登录页',
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
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    // @ts-ignore
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/errorPage',
    name: '错误页',
    component: Layout,
    children: [
      {
        path: '/404',
        name: '404',
        // @ts-ignore
        component: () => import('@/views/errorPage/component/notFound.vue')
      }
    ]
  },

  {
    path: '/ComponentLib',
    name: '构件库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'Box'
    },
    component: homeLayout,
    children: [
      {
        path: '/ProjectLib',
        name: '组件库',
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'], // 受访问限制的角色,
          icon: 'component'
        },
        children: [
          {
            path: '/UniversalLib',
            name: '通用库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'component'
            },
            // @ts-ignore
            component: () => import('@/views/testPage/index.vue')
          },
          {
            path: '/ProjectLib',
            name: '项目库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'Project'
            },
            // @ts-ignore
            component: () => import('@/views/testPage/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/ComponentLib',
    name: '纹理库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'Box'
    },
    component: homeLayout,
  },
  {
    path: '/ComponentLib',
    name: '算量库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'Box'
    },
    component: homeLayout,
  },

]

export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/ComponentLib',
    name: '构件库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'componentlib'
    },
    component: homeLayout,
    children: [
      {
        path: '/ProjectLib',
        name: '组件库',
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'], // 受访问限制的角色,
          icon: 'assemblylib'
        },
        children: [
          {
            path: '/UniversalLib',
            name: '通用库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'assemblylib'
            },
            // @ts-ignore
            component: () => import('@/views/testPage/index.vue')
          },
          {
            path: '/ProjectLib',
            name: '项目库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'projectlib'
            },
            // @ts-ignore
            component: () => import('@/views/testPage/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/ComponentLib',
    name: '纹理库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'texturelib'
    },
    component: homeLayout,
  },
  {
    path: '/ComponentLib',
    name: '算量库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'quantitylib'
    },
    component: homeLayout,
  },
  /*{
    path: '/homepage',
    name: '首页',
    meta: {
      requireAuth: true,
      roles: ['admin', 'guest'],
      icon: 'home'
    },
    // 使用箭头函数进行组件的懒加载
    component: homeLayout,
    // 在 homeLayout.vue 中使用 <router-view> 来渲染子路由内容
    children: [
      {
        path: '',
        name: '首页默认启动页',
        // @ts-ignore
        component: () => import('@/views/home/components/homePage.vue')
      }
    ]
  },
  {
    path: '/ComponentLib',
    name: '构件装配库',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'Box'
    },
    component: homeLayout,
    children: [
      {
        path: '/ProjectLib',
        name: '项目库',
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'], // 受访问限制的角色,
          icon: 'component'
        },
        component:{
          template: '<router-view/>'
        },
        children: [
          {
            path: '/UniversalLib',
            name: '构件库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'component'
            },
            // @ts-ignore
            component: () => import('@/views/ComponentLib/AssemblyLib/UniversalLib/index.vue')
          },
          {
            path: '/ProjectLib',
            name: '项目库',
            meta: {
              requireAuth: true, // 需要用户权限
              roles: ['admin', 'guest'], // 受访问限制的角色,
              icon: 'Project'
            },
            // @ts-ignore
            component: () => import('@/views/ComponentLib/AssemblyLib/ProjectLib/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/permissionsManagement',
    name: '权限管理',
    meta: {
      requireAuth: true, // 需要用户权限
      roles: ['admin', 'guest'], // 受访问限制的角色,
      icon: 'setting'
    },
    component: homeLayout,
    children: [
      {
        path: '/menuManagement',
        name: '菜单管理',
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'], // 受访问限制的角色,
          icon: 'Menu'
        },
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/menu/index.vue')
      },
      {
        path: '/roleManagement',
        name: '角色管理',
        meta: {
          requireAuth: true, // 需要用户权限
          roles: ['admin', 'guest'], // 受访问限制的角色,
          icon: 'Role'
        },
        // @ts-ignore
        component: () => import('@/views/permissionsManagement/role/index.vue')
      }
    ]
  },*/
];
