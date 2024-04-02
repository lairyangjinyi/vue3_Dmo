/*
* @Author: yangli
* @createDate: 2024/4/1 10:50
*/
export interface UserLoginType {
    username: string
    password: string
}

export interface UserType {
    username: string
    password: string
    role: string
    roleId: string
    client_id: string
    client_secret: string
    grant_type: string
}
export interface UserSuccessType {
    access_token: string
    expires_in: number
    refresh_token: string
    scope: string
    token_type: string
}
