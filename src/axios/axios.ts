/*
* @Author: yangli
* @createDate: 2024/4/1 16:32
*/
import axios from "axios";
import type {AxiosConfig} from "@/axios/types";
import {CONTENT_TYPE, REQUEST_TIMEOUT} from "@/axios/constant";
import CallBack from "@/axios/interceptors";


const baseUrl = import.meta.env.VITE_API_DOMAIN

const indexAxios = axios.create({
    timeout: REQUEST_TIMEOUT,
    baseURL: baseUrl
})


const request = async (option: AxiosConfig) => {
    const { url, method, params, data, headers, responseType } = option
    return await indexAxios.request({
        url: url,
        method,
        params,
        data: data,
        responseType: responseType,
        headers: {
            'Content-Type': CONTENT_TYPE,
            ...headers
        }
    })
};

// 请求响应拦截器
indexAxios.interceptors.response.use( (response) => {
    CallBack.Success(response);
    return response;
},  (error) => {
    CallBack.Fail(error);
    return Promise.reject(error);
});

indexAxios.interceptors.request.use((res)=>{
    CallBack.Before(res);
    return res;
})

export {request,indexAxios}
