<!--
* @Author: yangli
* @createDate: 2024/4/12 15:44
* @description: 404页面
-->
<script setup lang="ts">
import notFound from "@/assets/icon/404notFound.svg";

</script>

<template>
    <div class="demo-image">
        <el-image class="image" :src="notFound"/>
        <div class="demonstration">
            <span>抱歉，您访问的页面不存在</span>
            <el-button type="primary" size="small" @click="$router.push('/menuManagement')">返回首页</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin box400(){
    width: 400px;
    height: 400px;
}
@mixin center(){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.demo-image{
    @include center();
    .image {
        @include box400();
    }
    .demonstration{
        @include center();
        font-size: 16px;
        color: #999;
        margin-top: 20px;
        span{
            margin-bottom: 10px;
        }
    }
}
</style>