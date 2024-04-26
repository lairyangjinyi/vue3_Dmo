/*
* @Author: yangli
* @createDate: 2024/4/11 11:42
* @description: 
*/
import usePermissionStore from "@/stores/modules/permission";

 function usePermission() {
  const permissionStore = usePermissionStore();

  return {
    permissionStore,
  };
}

export default usePermission;