<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 首页
-->
<script setup lang="ts">
import IndexTopBar from "@/components/topBar/indexTopBar.vue";
import IndexSetting from "@/components/systemSettings/indexSetting.vue";
import IndexMenu from "@/components/leftMenu/indexMenu.vue";

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header style="padding: 0px">
                <index-top-bar/>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <index-menu/>
                </el-aside>
                <el-main>
                    <index-setting/>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
</style>