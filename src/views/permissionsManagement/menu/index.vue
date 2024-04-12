<!--
* @Author: yangli
* @createDate: 2024/4/8 17:39
* @description: 菜单管理
-->
<script setup lang="ts">
  import {ref,onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import userPermissionsStore from '@/stores/modules/permission';
  import {addMenuPermissionsList, getMenuPermissionsList} from "@/api/permissionsManagement";
  import addMenu from "@/views/permissionsManagement/menu/components/addMenu.vue";

  const store = userPermissionsStore();
  const route = useRouter();

  onMounted( () => {
      getData();
  });

  const getData = async () => {
      const { data } = await getMenuPermissionsList();
      console.log(data);
      menuList.value = data as Menu[];
  }

  const isShowAddMenu = ref<boolean>(false);
  const handleAdd = (value?: number) => {
      console.log(value);
      isShowAddMenu.value = true;
      return;
      const {data} = addMenuPermissionsList({
          icon: "wwwwww",
          id: "2",
          name: "dasdww",
          path: "/"
      });
      console.log(data);
    // store.commit('setEditMenuIndex', index);
    // route.push('/permissionsManagement/menu/edit');
  };

  const handleEdit = (value: number) => {
      console.log(value)
    // store.commit('setEditMenuIndex', index);
    // route.push('/permissionsManagement/menu/edit');
  };

  const handleDetail = (index: number) => {
      console.log(index)
    // store.commit('setEditMenuIndex', index);
    // route.push('/permissionsManagement/menu/edit');
  };

  const handleDelete = (index: number) => {
    store.commit('setDeleteMenuIndex', index);
    route.push('/permissionsManagement/menu/delete');
  };


  interface Menu {
      id: number;
      icon: string;
      name: string;
      path: string;
      children?: Menu[];
  }

  const menuList = ref<Menu[]> (
      [
          {
              id: 1,
              icon: '2016-05-02',
              name: 'wangxiaohu',
              path: 'No. 189, Grove St, Los Angeles',
          },
          {
              id: 2,
              icon: '2016-05-04',
              name: 'wangxiaohu',
              path: 'No. 189, Grove St, Los Angeles',
          },
          {
              id: 3,
              icon: '2016-05-01',
              name: 'wangxiaohu',
              path: 'No. 189, Grove St, Los Angeles',
              children: [
                  {
                      id: 31,
                      icon: '2016-05-01',
                      name: 'wangxiaohu',
                      path: 'No. 189, Grove St, Los Angeles',
                      children: [
                          {
                              id: 311,
                              icon: '2016-05-01',
                              name: 'wangxiaohu',
                              path: 'No. 189, Grove St, Los Angeles',
                              children: [
                                  {
                                      id: 3111,
                                      icon: '2016-05-01',
                                      name: 'wangxiaohu',
                                      path: 'No. 189, Grove St, Los Angeles',
                                      children: [
                                          {
                                              id: 31111,
                                              icon: '2016-05-01',
                                              name: 'wangxiaohu',
                                              path: 'No. 189, Grove St, Los Angeles',
                                          }
                                      ]
                                  }
                              ]
                          }
                          ]
                  },
                  {
                      id: 32,
                      icon: '2016-05-01',
                      name: 'wangxiaohu',
                      path: 'No. 189, Grove St, Los Angeles',
                  },
              ],
          },
          {
              id: 4,
              icon: '2016-05-03',
              name: 'wangxiaohu',
              path: 'No. 189, Grove St, Los Angeles',
          },
      ]
  );


</script>

<template>
  <div class="menu-management" style="height: 100%">
    <el-card class="box-card" style="height:100%">
        <el-button type="primary" size="small" @click="handleAdd()">添加</el-button>
      <el-table
              :data="menuList"
              row-key="id"
              style="width: 100%">
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="icon" label="图标" width="180"></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
            <el-button type="primary" size="small" @click="handleDetail(scope)">详情</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
      <addMenu v-model="isShowAddMenu"/>
  </div>
</template>

<style scoped lang="scss">

</style>