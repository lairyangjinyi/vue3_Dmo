/*
* @Author: yangli
* @createDate: 2024/4/11 11:44
* @description: 
*/

import {defineStore} from "pinia";
import { ref } from 'vue';
import router from "@/router";

const userPermissionsStore = defineStore('userPermissions', () => {
    // 角色
    const roles = ref('admin')

    // 权限
    const userPermissions = ref([])

    //是否登录
    const isLogin = ref(false)

    // 设置状态（传入的权限信息赋值给该状态）
    const setUserPermissions = (params:any) => {
        userPermissions.value = params
    }

    return {
        isLogin,
        userPermissions,
        roles,
        setUserPermissions
    }
})

export default userPermissionsStore;