/*
* @Author: yangli
* @createDate: 2024/4/23 17:01
* @description: stores整合
*/

import * as users from '@/stores/modules/users';
import * as sign from "@/stores/modules/sign";
import * as router from "@/stores/modules/router";
import * as project from "@/stores/modules/project";
import * as permission from "@/stores/modules/permission";

// store合集
export default {
    // 用户store
    users,
    // 登录注册store
    sign,
    // 路由store
    router,
    // 项目store
    project,
    // 权限store
    permission };