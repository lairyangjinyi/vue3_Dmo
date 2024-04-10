/*
 * @Author: yangli
 * @Date: 2024/15/29 15:29:33
 * @description: 二次封装的axios库请求方法
*/
import type {AxiosConfig} from "@/axios/types";
import {request} from "./axios";

export default {
    get: <T = any>(option: AxiosConfig) => {
        return request({ method: 'get', ...option })
    },
    post: <T = any>(option: AxiosConfig) => {
        return request({ method: 'post', ...option })
    },
    delete: <T = any>(option: AxiosConfig) => {
        return request({ method: 'delete', ...option })
    },
    put: <T = any>(option: AxiosConfig) => {
        return request({ method: 'put', ...option })
    },
}