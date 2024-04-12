<!--
* @Author: yangli
* @createDate: 2024/4/11 14:17
* @description: 
-->
<script setup lang="ts">
import indexAxios from "@/axios";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const responesTest = ()=>{
    indexAxios.get({url:'posts'}).then((response) => {
        console.log(response)
    });
    console.log('isDark',isDark);
    console.log('toggleDark',toggleDark);
    const myStorage = localStorage;
    console.log(myStorage)
    // router.push('/login');
}
</script>

<template>
<div>
    <a @click="responesTest">home</a>

</div>
</template>

<style scoped lang="scss">

</style>