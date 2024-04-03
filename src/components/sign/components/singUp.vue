<script setup lang="ts">
import useStore from '@/stores/modules/sign';

const store = useStore();

</script>

<template>
    <div class="container a-container" id="a-container" :class="{ [store.styleClass]: store.sidebarOpen }">
        <form class="form" id="a-form" method="" action="">
            <h2 class="form_title title">注册</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span">使用电子邮件进行注册</span>
            <el-input class="form__input" type="text" placeholder="用户名"/>
            <el-input class="form__input" type="text" placeholder="电子邮件地址"/>
            <el-input class="form__input" type="password" placeholder="密码"/>
            <el-input class="form__input" type="password" placeholder="确认密码"/>
            <el-button class="form__button button submit">注册</el-button>
        </form>
    </div>
</template>
<style scoped>
@import '@/style/loginStyle/index.scss';
/* 将源码中的css样式单独存放,在各组件中导入就可以。*/
</style>
