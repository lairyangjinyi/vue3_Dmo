/*
* @Author: yangli
* @createDate: 2024/3/29 16:29
* @description:
*/

import indexAxios from "@/axios";

export const signIn = async (data) => {
    return await indexAxios.get({url:'userList',params:data});
}

export const signUp = async (data) => {
    return await indexAxios.post({url:'userList',data:data});
}