/*
* @Author: yangli
* @createDate: 2024/4/20 11:42
* @description: router store
*/
import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import {useAddRoute} from "@/hooks/router";

interface RouteState {
  routerState?: any;
  routerList?: RouteRecordRaw[];
}

// 路由存储
//@ts-ignore
const useRouteStore = defineStore('route', {
  state: (): RouteState => ({
      routerList: [],
    routerState: null
  }),
  mutations: {},
  getters: {
    getRouterList(state) {
      return state.routerList;
    },
    getRouterState(state) {
      return state.routerState;
    }
  },
  actions: {
    setRouterList(routerList?: any) {
      this.routerList = routerList;
    },
    setRouterState(routerState?: any) {
      this.routerState = routerState;
    },
    removeRouterList() {
      this.routerList = [];
    },
    removeRouterState() {
      this.routerState = null;
    },
    addRouterList(router: any) {
      useAddRoute(router);
    },
    removeRouter(router: any) {
      const index = this.routerList?.findIndex((item: any) => item.path === router.path) as number;
      if (index > -1) {
        this.routerList?.splice(index, 1);
      }
    },
    resetRouter() {
      // @ts-ignore
      this.setRouterList([]);
    }
  },
})

export default useRouteStore;