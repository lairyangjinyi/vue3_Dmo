<!--
* @Author: yangli
* @createDate: 2024/4/7 15:45
-->
<script setup lang="ts">
import { ref } from 'vue';
import full from '@/assets/icon/fullScreen.svg';
import fullExit from '@/assets/icon/fullScreen_exit.svg';
import "@/style/topBar/index.scss";

const fullScreen = ref<boolean>(false);

const toggleFullScreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            fullScreen.value = true;
            element.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            fullScreen.value = false;
            document.exitFullscreen();
        }
    }
}
</script>

<template>
<div class="tools-bar">
    <div class="full-screen" @click="toggleFullScreen">
        <img :src="fullScreen? fullExit : full" alt="logo" class="logoImage">
    </div>
    </div>
</template>

<style scoped lang="scss">

</style>