/*
 * @Author: yangli
 * @Date: 2024/15/29 15:29:33
*/
import axios from 'axios';
import type {AxiosInstance} from 'axios';
import { showMessage } from "./status";
import { ElMessage } from 'element-plus'

const axiosInstance: AxiosInstance = axios.create({
    timeout: 60000,
    baseURL: import.meta.env.VITE_API_DOMAIN
})

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // 配置请求头
        config.headers = {
            //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
            'Content-Type':'application/json;charset=UTF-8',        // 传参方式json
            'token':'80c483d59ca86ad0393cf8a98416e2a1'              // 这里自定义配置，这里传的是token
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);           // 传入响应码，匹配响应码对应信息
            return Promise.reject(response.data);
        } else {
            ElMessage.warning('网络连接异常,请稍后再试!');
        }
    }
);

const service = {
    request: (config: RequestConfig) => {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config as any)
            }
            axiosInstance
                .request(config)
                .then((res) => {
                    resolve(res)
                })
                .catch((err: any) => {
                    if (err?.response?.status=== 401) {
                        const userStore = useUserStoreWithOut()
                        userStore.logout()
                    }
                    reject(err)
                })
        })
    },
}

const request = async (option: AxiosConfig) => {
    const { url, method, params, data, headers, responseType } = option
    const userStore = useUserStoreWithOut()
    const projectInfoStore = useProjectStoreWithOut()
    return await service.request({
        url: url,
        method,
        params,
        data: data,
        responseType: responseType,
        headers: {
            'Content-Type': CONTENT_TYPE,
            [userStore.getTokenKey ?? 'Authorization']: userStore.getToken ?? '',
            [projectInfoStore.getProjectId??'ProjectId']:projectInfoStore.getProjectId??'',
            ...headers
        }
    })
}

export default {
    get: <T = any>(option: AxiosConfig) => {
        return request({ method: 'get', ...option }) as Promise<IResponse<T>>
    },
    post: <T = any>(option: AxiosConfig) => {
        return request({ method: 'post', ...option }) as Promise<IResponse<T>>
    },
    delete: <T = any>(option: AxiosConfig) => {
        return request({ method: 'delete', ...option }) as Promise<IResponse<T>>
    },
    put: <T = any>(option: AxiosConfig) => {
        return request({ method: 'put', ...option }) as Promise<IResponse<T>>
    },
    /*cancelRequest: (url: string | string[]) => {
        return service.cancelRequest(url)
    },
    cancelAllRequest: () => {
        return service.cancelAllRequest()
    }*/
}
