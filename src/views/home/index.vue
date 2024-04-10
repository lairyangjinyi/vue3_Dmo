<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 首页
-->
<script setup lang="ts">
import {onMounted} from "vue";
import indexAxios from "@/axios";
import router from "@/router";
import { useToggle,useDark } from '@vueuse/core';
import IndexTopBar from "@/components/topBar/indexTopBar.vue";
import IndexSetting from "@/components/systemSettings/indexSetting.vue";
import IndexMenu from "@/components/leftMenu/indexMenu.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(()=>{

})

const responesTest = ()=>{
    indexAxios.get({url:'posts'}).then((response) => {
        // console.log(response)
    });
    console.log('isDark',isDark);
    console.log('toggleDark',toggleDark);
   const myStorage = localStorage;
    console.log(myStorage)
    // router.push('/loginIndex');
}
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
                    <a @click="responesTest">home</a>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
</style>