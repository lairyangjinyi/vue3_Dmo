/*
* @Author: yangli
* @createDate: 2024/3/29 15:07
*/
import { RawAxiosRequestHeaders } from 'axios'

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put';
declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
declare type AxiosContentType =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'

declare interface AxiosConfig {
    params?: any
    data?: any
    url?: string
    method?: AxiosMethod
    headers?: RawAxiosRequestHeaders
    responseType?: AxiosResponseType
}