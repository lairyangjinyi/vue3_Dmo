/*
* @Author: yangli
* @createDate: 2024/3/29 16:29
* @description:
*/

import indexAxios from "@/axios";

export const signIn = async (data:any) => {
    return await indexAxios.get({url:'userList',params:data});
}

export const signUp = async (data:any) => {
    return await indexAxios.post({url:'userList',data:data});
}