<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 注册页面
-->
<script setup lang="ts">
import { ref } from "vue";
import useStore from '@/stores/modules/sign';
import {signUp as signUpApi} from "@/api/sign";

const store = useStore();
const signUpForm = ref({
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
});
const signUp = async () => {
  const { userName, email, password, confirmPassword } = signUpForm.value;
  if (password!== confirmPassword) {
    alert('两次输入的密码不一致');
    return;
  }
  const res = await signUpApi({ userName, email, password });
  if (res.status === 200) {
    alert('注册成功，请登录');
    store.resetForm();
  } else {
    alert(res.message);
  }
};
</script>

<template>
    <div class="container a-container" id="a-container" :class="{ [useStore().styleClass]: useStore().sidebarOpen }">
        <form class="form" id="a-form" method="" action="">
            <h2 class="form_title title">注册</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span">使用电子邮件进行注册</span>
            <el-input v-model="signUpForm.userName" class="form__input" type="text" placeholder="用户名"/>
            <el-input v-model="signUpForm.email" class="form__input" type="text" placeholder="电子邮件地址"/>
            <el-input v-model="signUpForm.password" class="form__input" type="password" placeholder="密码"/>
            <el-input v-model="signUpForm.confirmPassword" class="form__input" type="password" placeholder="确认密码"/>
            <el-button class="form__button button submit" @click="signUp">注册</el-button>
        </form>
    </div>
</template>
<style scoped>
@import '@/style/loginStyle/index.scss';
</style>
