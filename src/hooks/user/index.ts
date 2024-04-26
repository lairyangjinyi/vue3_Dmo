/*
* @Author: yangli
* @createDate: 2024/4/18 16:24
* @description: 存储用户信息到sessionStorage与store中
*/
import useUserStore from '@/stores/modules/users';

export function setUserInfo(userInfo: any) {
    const userStore = useUserStore();
    userStore.setUserInfo(userInfo);
}

export function setToken(token: string) {
    const userStore = useUserStore();
    userStore.setToken(token);
}

export default function getUserInfo() {
    const userStore = useUserStore();
    /*if (userInfoSession) {
        // 登录成功，设置用户信息和token
        userStore.setUserInfo(JSON.parse(userInfoSession));
    }
    if (tokenSession) {
        userStore.setToken(tokenSession);
    }*/
}