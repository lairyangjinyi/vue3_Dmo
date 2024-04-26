<!--
* @Author: yangli
* @createDate: 2024/4/11 11:51
* @description: 
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import  usePermission  from '@/hooks/permission/usePermission';
import {ElMessage} from "element-plus";

const isShow = defineModel({required: true, default: false})


const menuForm = ref({
    id: '', // 菜单ID
    name: '', // 菜单名称
    path: '', // 菜单路径 前端路由
    type: 'directory', // 菜单类型
    order: 0, // 菜单排序
    status: true, // 菜单状态
});
const { hasPermission } = usePermission();
const router = useRouter();

const handleSubmit = () => {
    if (!hasPermission('/permission/menu/add')) {
        ElMessage.error('无权限，请联系管理员');
        return;
    }
    // 发送请求
    // 成功后提示成功信息
    // 失败后提示失败信息
};
</script>

<template>
    <el-dialog v-model="isShow" title="添加菜单" width="50%">
        <div class="menu-management">
            <el-form ref="menuForm" :model="menuForm" label-width="100px">
                <el-form-item label="菜单名称">
                    <el-input v-model="menuForm.name"></el-input>
                </el-form-item>
                <el-form-item label="菜单路径">
                    <el-input v-model="menuForm.path"></el-input>
                </el-form-item>
                <el-form-item label="菜单类型">
                    <el-select v-model="menuForm.type">
                        <el-option label="目录" value="directory"></el-option>
                        <el-option label="菜单" value="menu"></el-option>
                        <el-option label="按钮" value="button"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="菜单排序">
                    <el-input-number v-model="menuForm.order"></el-input-number>
                </el-form-item>
                <el-form-item label="菜单状态">
                    <el-switch v-model="menuForm.status"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<style scoped lang="scss">

</style>