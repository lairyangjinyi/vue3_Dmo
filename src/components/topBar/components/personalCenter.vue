<!--
* @Author: yangli
* @createDate: 2024/4/3 17:52
* @description: 个人中心
-->
<script setup lang="ts">
import { toRefs, reactive } from 'vue';
import {userStore} from '@/stores/modules/users';
import emptyAvatar from '@/assets/images/emptyAvatar.png';
import "@/style/topBar/index.scss";

const userStores = userStore();
const handleCommand = (command: string) => {
    console.log(command);
  if (command === '个人中心') {
      console.log(userStores.userInfo);
    // TODO: 跳转到个人中心页面
  } else if (command === '退出系统') {
      userStores.logout();
    // TODO: 退出系统
  }
}

const state = reactive({
    circleUrl:emptyAvatar,
    sizeList: ['small', '', 'large'] as const,
});
const { circleUrl, squareUrl, sizeList } = toRefs(state);

</script>

<template>
<div class="personal-center">
    <el-dropdown trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <div class="personal-center-icon">
          <el-avatar :size="50" :src="state.circleUrl" />
      </div>
      <span style="color: var(--white-color);">{{ userStores.$state.userInfo?.userName }}</span>
    </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
                <el-dropdown-item command="退出系统">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</div>
</template>

<style scoped lang="scss">


</style>