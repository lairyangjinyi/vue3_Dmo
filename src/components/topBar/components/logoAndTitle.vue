<!--
* @Author: yangli
* @createDate: 2024/4/7 15:04
-->
<script setup lang="ts">
import favicon from "@/assets/icon/projectIcon.svg";
import "@/style/topBar/index.scss";

const title = import.meta.env.VITE_NAME;
const title_EN = import.meta.env.VITE_NAME_EN;
</script>

<template>
    <div class="topBarLogo" @click="$router.push('/home')">
        <img :src="favicon" alt="topBarLogo" class="logoImage">
        <div class="title">
            <div class="titleText">{{title}}</div>
            <div class="titleEnglish">{{title_EN}}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>