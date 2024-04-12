<script setup lang="ts">
import {ref} from "vue";
import type {loginInTypes} from "@/api/sign/types";
import {useRoute,useRouter} from "vue-router";
import useStore from "@/stores/modules/sign";
import userStores from "@/stores/modules/users";
import {signIn} from "@/api/sign";
import {ElMessage} from "element-plus";

const loginFrom = ref<loginInTypes>({userName: "admin", password: "1q2w3E*"});

const store = useStore();
const userStore = userStores();
const router = useRouter();
const route = useRoute();

const login = async () => {
    const {userName, password} = loginFrom.value;
    try {
        const response = await signIn({userName:userName});
        console.log(response);
        sessionStorage.setItem("userInfo", JSON.stringify(response.data[0]));
        if (response.status === 200 && response.data.length > 0){
            router.push({path: '/home', replace:true});
            // 从 sessionStorage 获取数据
            const data = JSON.parse(sessionStorage.getItem("userInfo") || 'null');
            if (data){
                userStore.setUserInfo(data);
            }
            console.log(data);
        }
        else{
            ElMessage.error('用户名或密码错误');
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <div class="container b-container" id="b-container" :class="{ [store.styleClass]: !store.sidebarOpen }">
        <form class="form" id="b-form" method="" action="">
            <h2 class="form_title title">登录</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span"></span>
            <el-input class="form__input" type="text" placeholder="用户名" v-model="loginFrom.userName"/>
            <el-input class="form__input" type="password" placeholder="密码" v-model.lazy="loginFrom.password"/>
            <a class="form__link"></a>
            <el-button class="form__button button submit" @click="login">登录</el-button>
        </form>
    </div>
</template>
<style scoped>
@import '@/style/loginStyle/index.scss';
</style>