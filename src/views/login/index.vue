<script setup lang="ts">
import signLayout from '@/components/sign/index.vue';
import { useToggle,useDark } from '@vueuse/core';
import dark from '@/assets/icon/dark.svg';
import light from '@/assets/icon/light.svg';
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<template>
    <div class="body" color-scheme="dark" :class="{ 'dark': isDark }">
        <el-switch
            v-model="isDark"
            inline-prompt
            active-icon="dark"
            inactive-icon="light"
            size="large"
            @change="toggleDark"
            class="switchDisPlay"
        />
        <div class="main">
            <sign-layout/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/style/loginStyle/loginStyle.scss" as *;
</style>