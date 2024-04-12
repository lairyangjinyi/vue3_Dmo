/*
* @Author: yangli
* @createDate: 2024/4/11 16:51
* @description: 路由守卫
*/
import type { RouteLocationNormalized,NavigationGuardNext } from 'vue-router';
import router from '../router';

const whiteList = ['/login'] // 白名单 无需登录即可访问的路由

function isLogin(route:any) {
  return route.meta.isLogin || whiteList.includes(route.path)
}

const authGuard =(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('userInfo');
    next();
  };
  if (to.matched.length === 0) {
    // 可以跳转到一个默认页面或者其他路由
    next('/404');
    // 处理不存在的路由
    console.error("不存在的路由");
  };
  if (!sessionStorage.getItem('userInfo') && to.path != '/login') {
    next('/login');
  } else {
    next();
  }
}

export default authGuard;