<script setup lang="ts">
import signLayout from '@/components/sign/index.vue';

import { useToggle,useDark } from '@vueuse/core'
const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>
<template>
    <div class="body" color-scheme="dark" :class="{ 'dark': isDark }">
        <el-switch
            v-model="isDark"
            inline-prompt
            active-text="dark"
            size="large"
            inactive-text="light"
            @change="toggleDark"
            class="switchDisPlay"
        />
        <div class="main">
            <sign-layout/>
        </div>
    </div>
</template>

<style scoped >
@import '@/style/loginStyle/loginStyle.scss';
</style>