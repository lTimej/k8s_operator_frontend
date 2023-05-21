import {requests} from "../requests";

//登录
export function login(register_info) {
    return requests({
        url:'/user/login',
        method:'post',
        data:{
            username: register_info.username,
            password: register_info.password
        }
    })
}

//注册
export function register(register_info) {
    return requests({
        url:'/user/register',
        method:'post',
        data:{
            username: register_info.username,
            password: register_info.password,
            re_password: register_info.re_password,
            nickname: register_info.nickname,
            email: register_info.email,
        }
    })
}