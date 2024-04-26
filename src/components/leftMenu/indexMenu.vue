<!--
* @Author: yangli
* @createDate: 2024/4/8 15:07
-->
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { dynamicRoutes } from '@/router/routerSetting';
import type {RouteRecordRaw} from "vue-router";

const isCollapse = ref(true);

const menuList = ref<RouteRecordRaw[]>(dynamicRoutes);

const handleSelect = (value: string) => {
    router.push('/'+value);
    console.log(value)
}
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
}
</script>

<template>
    <div class="main-left-menu">
            <el-menu
                default-active="2"
                class="elMenu"
                :collapse="false"
                @select="handleSelect"
                @open="handleOpen"
                @close="handleClose">
                <el-scrollbar class="el-scrollbar">
                    <!-- 一级菜单 -->
                    <template v-for="(item, index) in menuList" :key="index">
                        <!-- 一级菜单无子菜单 -->
                        <el-menu-item :index="index + ''" :to="item.path" v-if="!item.children || !item.children[0].path" :key="index">
                            <img :src="'src/assets/icon/menu/'+item.meta?.icon+'.svg'" width="20px" height="20px" alt="">
                            <span>{{ item.name }}</span>
                        </el-menu-item>
                        <!-- 一级菜单有子菜单 -->
                        <el-sub-menu :index="index + ''" v-else>
                            <template #title>
                                <img :src="'src/assets/icon/menu/'+item.meta?.icon+'.svg'" width="20px" height="20px" alt="">
                                <span>{{ item.name }}</span>
                            </template>
                            <!-- 二级菜单 -->
                            <template v-for="(child, indexChild) in item.children" :key="indexChild">
                                <!-- 二级菜单无子菜单 -->
                                <el-menu-item v-if="!child.children" :index="child.path" :key="indexChild">
                                    <img :src="'src/assets/icon/menu/'+child.meta?.icon+'.svg'" width="20px" height="20px" alt="">
                                    <span>{{ child.name }}</span>
                                </el-menu-item>
                                <!-- 二级菜单有子菜单 -->
                                <el-sub-menu :index="child.path" v-else>
                                    <template #title>
                                        <img :src="'src/assets/icon/menu/'+child.meta?.icon+'.svg'" width="20px" height="20px" alt="">
                                        <span>{{ child.name }}</span>
                                    </template>
                                    <!-- 三级菜单 -->
                                    <template v-for="(grandson, indexGrandson) in child.children" :key="indexGrandson">
                                        <el-menu-item :index="grandson.path">
                                            <img :src="'src/assets/icon/menu/'+grandson.meta?.icon+'.svg'" width="20px" height="20px" alt="">
                                            <span>{{ grandson.name }}</span>
                                        </el-menu-item>
                                    </template>
                                </el-sub-menu>
                            </template>
                        </el-sub-menu>
                    </template>
                    </el-scrollbar>
            </el-menu>
    </div>
</template>

<style scoped lang="scss">
$topStyle:60px;
@mixin HT(){
    height: calc(100vh - #{$topStyle});
    min-height: calc(100vh - #{$topStyle});
}
.main-left-menu {
    width: 200px;
    @include HT();
    .el-scrollbar {
        @include HT();
    }
  &:deep(.elMenu):not(.el-menu--collapse) {
    width: 200px;
    @include HT();
  }
}
</style>