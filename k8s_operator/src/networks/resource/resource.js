import {requests} from "../requests";

//获取资源
export function getResource() {
    return requests({
        url:'/resource/getresource',
        method:'get'
    })
}

//获取cpu
export function getCpu() {
    return requests({
        url:'/resource/cpu',
        method:'get'
    })
}

//获取memory
export function getMemory() {
    return requests({
        url:'/resource/memory',
        method:'get'
    })
}

//获取disk
export function getDisk() {
    return requests({
        url:'/resource/disk',
        method:'get'
    })
}

//获取network
export function getNetwork() {
    return requests({
        url:'/resource/network',
        method:'get'
    })
}
