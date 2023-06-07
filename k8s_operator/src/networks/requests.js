import axios from "axios";

export function requests(config){
    //实例化对象
    let instance
    instance = axios.create({
        baseURL:'http://192.168.70.99:8998',
        timeout: 50000,
        // withCredentials: true,
    });
    //请求前调用
    instance.interceptors.request.use(config=>{
        console.log(config,"9999999")
        config.headers.Authorization = "Bearer " + window.sessionStorage.getItem("token")
        return config
    },error => {
        // console.log(error,333333);
        return error;
    });

    //响应前被调用
    instance.interceptors.response.use(res=>{
        //成功响应
        console.log(res,666666)
        if(res.data.code >= 40 && res.data.code <= 44){
            window.sessionStorage.clear()
        }
        return res
    },error => {
        //错误响应

        console.log(error,88888888)
        return error.response;

    });

    //发送请求
    return instance(config)
}
