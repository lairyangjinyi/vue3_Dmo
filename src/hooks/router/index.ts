/*
* @Author: yangli
* @createDate: 2024/4/20 14:38
* @description: router hooks
*/

import store from "@/stores";
import router from "@/router";
import type {RouteRecordRaw} from "vue-router";

// 添加动态路由,存储到sessionStorage和vuex
export function useAddRoute(routerList: string | Array<RouteRecordRaw>){
    console.log(typeof routerList, routerList)
    const routeStores = store.router.default();
    setAddRoute(routerList)
    routeStores.setRouterList(routerList);
}

// 获取动态路由刷新页面后仍然获取到
export default function useGetRoute(){
    const routeStores = store.router.default();
    /*if(routerList) {
        // @ts-ignore
        routeStores.setRouterList(routerList);
        setAddRoute(routerList)
    }*/
}

export function useRemoveRoute(name: string) {
    const routeStores = store.router.default();
    const routerList = routeStores.routerList?.filter((item) => item.name!== name);
    setAddRoute(routerList)
    // @ts-ignore
    routeStores.setRouterList(routerList);
}

// 动态路由添加到路由表中
export const setAddRoute = (routeList?: Array<RouteRecordRaw>) => {
    console.log(routeList)
    if (routeList && routeList.length > 0){
        routeList.forEach((route) => {
            console.log(route)
            const routeName = route.name
            if (!router.hasRoute(routeName as string)) {router.addRoute(route)}
        })
    }
    console.log(router.getRoutes())
}
