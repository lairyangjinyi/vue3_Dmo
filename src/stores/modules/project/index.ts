/*
* @Author: yangli
* @createDate: 2024/4/18 10:45
* @description: 项目模块
*/

import { defineStore } from 'pinia';

interface ProjectState {
    projectId:string
    projectName:string
}

// @ts-ignore
export const projectStore = defineStore('user', {
    state: (): ProjectState => {
        return {
            projectId: '',
            projectName: '',
        }
    },
    getters: {
        getProjectId(): string {
            return this.projectId
        },
        getProjectName(): string {
            return this.projectName
        }
    },
    actions: {
        setProjectId(projectId: string) {
            this.projectId = projectId
        },
        setProjectName(projectName: string) {
            this.projectName = projectName
        }
    },
    persist: true
})

export default projectStore
