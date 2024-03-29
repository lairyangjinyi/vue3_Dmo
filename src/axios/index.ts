/*
 * @Author: yangli
 * @Date: 2024/15/29 15:29:33
*/
import axios from "axios";

export const PATH_URL = import.meta.env.VITE_API_BASE_PATH

const instance = axios.create({
    baseURL: PATH_URL,
    timeout: 6000,
});