<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 登录注册组件界面
-->
<script setup lang="ts">
import signUp from '@/components/sign/components/singUp.vue';
import signIn from '@/components/sign/components/singIn.vue';
import switchSign from '@/components/sign/components/signSwitch.vue';
import useStore from '@/stores/modules/sign';
import {onMounted} from "vue";

onMounted(()=>{
    const store = useStore();
})


</script>

<template>
  <switch-sign/>
    <sign-up/>
  <sign-in/>
</template>

<style scoped>

</style>