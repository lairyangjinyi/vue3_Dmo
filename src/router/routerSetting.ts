/*
* @Author: yangli
* @createDate: 2024/4/10 11:24
*/

// 路由显示为全屏
// @ts-ignore
export const Layout: any = () => import('@/App.vue');

// 路由显示为首页main组件
// @ts-ignore
export const homeLayout: any = () => import('@/views/home/index.vue');