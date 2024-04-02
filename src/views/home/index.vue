<script setup lang="ts">
import {onMounted} from "vue";
import indexAxios from "@/axios";

onMounted(()=>{

})

const responesTest = ()=>{
    indexAxios.get({url:'poss'}).then((response) => {
        console.log(response)
    })
}
</script>

<template>
<div>
    <a @click="responesTest">home</a>
</div>
</template>

<style scoped>

</style>