<!--
* @Author: yangli
* @createDate: 2024/4/7 17:59
-->
<script setup lang="ts">
import { ref } from 'vue';
import {useDark, useToggle} from "@vueuse/core";

const drawer = ref(false);
const handleClose = (done: () => void) => {
            done();
            drawer.value = false;
}

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
<div class="indexSetting" @click="drawer = true" v-show="!drawer">
    <el-icon :size="25"><Setting /></el-icon>
</div>
    <div class="indexSettingDrawerDiv">
        <el-drawer
            v-model="drawer"
            class="indexSettingDrawer"
            :with-header="false"
            :before-close="handleClose">
            <el-switch
                v-model="isDark"
                inline-prompt
                active-text="dark"
                size="large"
                inactive-text="light"
                @change="toggleDark"
            />
        </el-drawer>
    </div>
</template>

<style scoped lang="scss">
.indexSetting {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 9999;
    display: flex;
    color: #ffffff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: var(--el-color-primary);
    align-items: center;
    justify-content: center;
}

.indexSettingDrawerDiv:deep(.indexSettingDrawer) {
        width: 20%!important;
}
</style>