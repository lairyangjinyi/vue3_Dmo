<!--
* @Author: yangli
* @createDate: 2024/4/8 15:07
-->
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const isCollapse = ref(true);

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

                    <el-menu-item index="homepage">
                        <el-icon>
                            <document/>
                        </el-icon>
                        <template #title>首页</template>
                    </el-menu-item>

                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <location/>
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group>
                            <template #title><span>Group One</span></template>
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title><span>item four</span></template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <setting/>
                            </el-icon>
                            <span>权限管理</span>
                        </template>
                            <el-menu-item index="menuManagement">菜单管理</el-menu-item>
                            <el-menu-item index="roleManagement">角色管理</el-menu-item>
                    </el-sub-menu>
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