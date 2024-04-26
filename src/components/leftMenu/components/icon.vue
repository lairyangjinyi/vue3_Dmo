<!--
* @Author: yangli
* @createDate: 2024/4/26 17:50
* @description: 图标组件
-->
<script setup lang="ts">
  import { defineProps } from 'vue';
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });
</script>

<template>
    <img :src="'src/assets/icon/menu/'+item.meta?.icon+'.svg'" width="20px" height="20px" alt="">
</template>

<style scoped lang="scss">

</style>