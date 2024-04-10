/*
* @Author: yangli
* @createDate: 2024/3/29 15:07
* @description: 请求配置类型
*/
import type { RawAxiosRequestHeaders } from 'axios'

export declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put';
export declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
export declare type AxiosContentType =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'

export declare interface AxiosConfig {
    params?: any
    data?: any
    url?: string
    method?: AxiosMethod
    headers?: RawAxiosRequestHeaders
    responseType?: AxiosResponseType
}