<!--
* @Author: yangli
* @createDate: 2024/4/10 11:28
-->
<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {getRolePermissionsList} from "@/api/permissionsManagement";

const route = useRouter()

interface tableDataType {
    id: number;
    nikeName: string;
    description: string;
}

const tableData = ref<tableDataType[]>([]);

onMounted(() => {
    getData();
});
const getData = async () => {
    const {data} = await getRolePermissionsList();
    tableData.value = data as tableDataType[];
    console.log(tableData);
}

const handleEdit = (row: any) => {
    if (hasPermission('role:edit')) {
        store.commit('permission/setRoleInfo', row)
        route.push({name: 'RoleEdit'})
    } else {
        createMessage.error('没有权限');
    }
}

const handleDelete = (row: any) => {
    if (hasPermission('role:delete')) {
        store.commit('permission/setRoleInfo', row)
        route.push({name: 'RoleDelete'})
    } else {
        createMessage.error('没有权限');
    }
}
</script>

<template>
    <div>
        <el-card>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="角色ID" width="100"></el-table-column>
                <el-table-column prop="nikeName" label="角色名称"></el-table-column>
                <el-table-column prop="description" label="角色描述"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<style scoped lang="scss">

</style>