/*
* @Author: yangli
* @createDate: 2024/4/12 11:51
* @description: 权限管理接口
*/

import indexAxios from "@/axios";

// 获取菜单权限列表
export const getMenuPermissionsList = (params?: any|undefined) => {
  return indexAxios.get({ url: "menuList", params: params });
};

// 添加菜单
export const addMenuPermissionsList = (params?: any|undefined) => {
  return indexAxios.post({ url: "menuList", data: params });
};

// 获取角色权限列表
export const getRolePermissionsList = (params?: any|undefined) => {
  return indexAxios.get({ url: "roleList", params: params });
};

// 添加角色
export const addRolePermissionsList = (params?: any|undefined) => {
  return indexAxios.post({ url: "roleList", data: params });
};