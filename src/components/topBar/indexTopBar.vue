<!--
* @Author: yangli
* @createDate: 2024/4/3 17:40
-->
<script setup lang="ts">
import PersonalCenter from "@/components/topBar/components/personalCenter.vue";
import LogoAndTitle from "@/components/topBar/components/logoAndTitle.vue";
import ToolsBar from "@/components/topBar/components/toolsBar.vue";
import "@/style/topBar/index.scss";

</script>

<template>
    <div class="top-bar-container">
        <div class="top-bar">
            <logo-and-title/>
            <tools-bar/>
            <personal-center/>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>