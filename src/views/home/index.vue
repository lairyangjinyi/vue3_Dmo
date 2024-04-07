<script setup lang="ts">
import {onMounted} from "vue";
import indexAxios from "@/axios";
import router from "@/router";
import { useToggle,useDark } from '@vueuse/core';
import IndexTopBar from "@/components/topBar/indexTopBar.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

onMounted(()=>{

})

const responesTest = ()=>{
    indexAxios.get({url:'posts'}).then((response) => {
        console.log(response)
    });
    console.log(isDark)
    // router.push('/loginIndex');
}
</script>

<template>
<div>
    <index-top-bar/>
    <a @click="responesTest">home</a>
    <h1 :style="{ color: isDark ? 'white' : 'black' }" color-scheme="dark" :class="{ 'dark': isDark }">Hello World</h1>
    <div>
        <p v-if="isDark">当前处于暗黑模式</p>
        <p v-else>当前处于亮白模式</p>

        <el-button @click="toggleDark()" type="primary">
            <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </el-button>
        <el-switch
            v-model="isDark"
            inline-prompt
            active-text="dark"
            size="large"
            inactive-text="light"
            @change="toggleDark"
        />
    </div>
</div>
</template>

<style scoped lang="scss">
html.dark {
    background-color: #333333;
}
</style>