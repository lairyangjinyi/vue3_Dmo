/*
* @Author: yangli
* @createDate: 2024/3/29 16:29
* @description: 登录的store
*/
import { defineStore } from 'pinia'
import {ref} from "vue";

const sidebarOpen = ref<boolean>(true);

const loginStore = defineStore('signStore', {
    state: () => ({
            sidebarOpen: sidebarOpen,
            styleClass:''
    }),
    getters: {
        getClassName: (state) => {
           return state.styleClass;
        },
        getStore: (state) => {
            return state.sidebarOpen;
        },
    },
    actions: {
        setSignUp() {
            this.sidebarOpen = true;
            this.styleClass = 'is-txl';
        },
        setSignIn() {
            this.sidebarOpen = false;
            this.styleClass = 'is-z200';
        }
    }
})

export default loginStore;
