/*
* @Author: yangli
* @createDate: 2024/4/11 16:51
* @description: 路由守卫
*/
import type {RouteLocationNormalized, NavigationGuardNext, NavigationFailure} from 'vue-router';
import useStore from '@/stores';
import router from '../router';
import useRouteStore from "@/stores/modules/router";

const whiteList = ['/login'] // 白名单 无需登录即可访问的路由

function isLogin(route:any) {
  return route.meta.isLogin || whiteList.includes(route.path)
}

const beforeEach =(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const usersStore = useStore.users.userStore();
  const routesStore = useStore.router.default();
  //@ts-ignore
  routesStore.setRouterState('beforeEach');
  if (to.path === '/login') {
    next();
  }
  else if (to.matched.length === 0) {
    // 可以跳转到一个默认页面或者其他路由
    next('/404');
    // 处理不存在的路由
    console.error("不存在的路由");
  }
  else if (!usersStore.token && to.path != '/login') {
    console.log('未登录');
    next('/login');
  } else {
    next();
  }
}

const afterEach = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const routesStore = useStore.router.default();
  //@ts-ignore
  routesStore.setRouterState('afterEach');
}

export {beforeEach, afterEach};