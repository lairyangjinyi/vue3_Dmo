/*
* @Author: yangli
* @createDate: 2024/4/1 19:43
* @description: 请求拦截器的实现
*/
// 添加响应拦截器
import type {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {showMessage} from "@/axios/status";
import {ElMessage} from "element-plus";
import router from "@/router";
import type {AxiosConfig} from "@/axios/types";
import {TRANSFORM_REQUEST_DATA} from "@/axios/constant";


export default class CallBack{
    Success:any;
    Fila:any;
    Options:any;
    constructor(Success:any,Fila:any,Options:any) {
        this.Success = Success;
        this.Fila = Fila;
        this.Options = Options;
    }

    static Before(config:InternalAxiosRequestConfig){
        // console.log('config',config);
            return config
    }

    static Success(config:AxiosResponse){
        // console.log(config);
        return config;
    };

    static Fail(error:any){
        if (error.response.status>200){
            ElMessage.error(showMessage(error.response.status));
            if ([401, 403].includes(error.response.status)) {
                router.push('/login');
            }
        }
        return Promise.reject(error);
    };
}


