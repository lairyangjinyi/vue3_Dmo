/*
* @Author: yangli
* @createDate: 2024/3/29 16:45
*/
import {defineStore} from "pinia";
import type {UserLoginType, UserType} from "@/stores/modules/users/types";
import router from "@/router";

interface UserState {
    userInfo?: UserType
    tokenKey: string
    token: string
    roleRouters?: string[]
    rememberMe: boolean
    loginInfo?: UserLoginType
}

export const userStore = defineStore('user',
    {
        state: (): UserState => ({
            userInfo: undefined,
            tokenKey: 'Authorization',
            token: '',
            roleRouters: undefined,
            // 记住我
            rememberMe: true,
            loginInfo: undefined
        }),
        getters: {
            getTokenKey: (state) => {
                return state.tokenKey
            },
            getToken: (state) => {
                return state.token
            },
            getUserInfo: (state) => {
                return state.userInfo
            },
            getRoleRouters: (state) => {
                return state.roleRouters
            },
            getRememberMe: (state) => {
                return state.rememberMe
            },
            getLoginInfo: (state) => {
                return state.loginInfo
            }
        },
        actions: {
            setTokenKey(tokenKey: string) {
                this.tokenKey = tokenKey
            },
            setToken(token: string) {
                this.token = token
            },
            setUserInfo(userInfo?: any) {
                this.userInfo = userInfo
            },
            setRoleRouters(roleRouters: string[]) {
                this.roleRouters = roleRouters
            },
            setRememberMe(rememberMe: boolean) {
                this.rememberMe = rememberMe
            },
            setLoginInfo(loginInfo: UserLoginType | undefined) {
                this.loginInfo = loginInfo
            },
            reset() {
                this.setLoginInfo('');
                this.setToken('');
                this.setUserInfo(undefined);
                this.setRoleRouters([]);
                router.push('/loginIndex');
            },
            logout() {
                this.reset()
            },
        },
        persist: true
    })

export default userStore