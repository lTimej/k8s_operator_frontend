import {requests} from "../requests";

//创建空间模板
export function createSpaceTemplate(form) {
    return requests({
        url:'/space/template/create',
        method:'post',
        data:{
            "name": form.name,
            "kind_id": form.kind,
            "image": form.image,
            "tags": form.tags,
            "description": form.description,
            "avatar": form.avatar,
        }
    })
}
//获取模板类型
export function getTemplateKind() {
    return requests({
        url:'/template/kind/get',
        method:'get',
    })
}
//获取空间模板
export function getSpaceTemplate() {
    return requests({
        url:'/space/template/get',
        method:'get',
    })
}
//编辑空间模板
export function editSpaceTemplate(form,id) {
    return requests({
        url:'/space/template/update/' + id,
        method:'put',
        data:{
            "name": form.name,
            "kind_id": form.kind,
            "image": form.image,
            "tags": form.tags,
            "description": form.description,
            "avatar": form.avatar,
        }
    })
}
//删除空间模板
export function deleteSpaceTemplate(id) {
    return requests({
        url:'/space/template/delete/' + id,
        method:'delete'
    })
}
