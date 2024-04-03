<script setup lang="ts">
import {ref} from "vue";
import type {loginInTypes} from "@/api/sign/types";
import {useRoute,useRouter} from "vue-router";
import useStore from "@/stores/modules/sign";

const loginFrom = ref<loginInTypes>({username: "admin", password: "1q2w3E*"});

const store = useStore();
const router = useRouter();
const route = useRoute();

const login = () => {
    router.push('/home')
    console.log('denglu')
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
            <el-input class="form__input" type="text" placeholder="用户名" v-model="loginFrom.username"/>
            <el-input class="form__input" type="password" placeholder="密码" v-model.lazy="loginFrom.password"/>
            <a class="form__link"></a>
            <el-button class="form__button button submit" @click="login">登录</el-button>
        </form>
    </div>
</template>
<style scoped>
@import '@/style/loginStyle/index.scss';
/* 将源码中的css样式单独存放,在各组件中导入就可以。*/
</style>