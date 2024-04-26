import { createRouter, createWebHistory  } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import { beforeEach , afterEach } from "@/router/authGuard";
import {routes} from './routerSetting';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router
