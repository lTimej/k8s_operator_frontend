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

//获取空间规格
export function getSpaceSpec() {
    return requests({
        url:'/space/spec/get',
        method:'get',
    })
}

//获取空间
export function getSpace() {
    return requests({
        url:'/space/get',
        method:'get',
    })
}

//创建空间模板
export function createSpace(formSpace) {
    return requests({
        url:'/space/create/run',
        method:'post',
        data:{
            "name": formSpace.name,       
            "template_id": formSpace.template_id, 
            "space_spec_id": formSpace.space_spec_id,
            "user_id": formSpace.user_id,     
        }
    })
}

//启动空间模板
export function startSpace(id) {
    return requests({
        url:'/space/start',
        method:'put',
        data:{
            "id": id    
        }
    })
}

//停止空间模板
export function stopSpace(id,sid) {
    return requests({
        url:'/space/stop',
        method:'put',
pace
            "id": id,       
            "sid": sid   
        }
    })
}

//删除空间模板
export function delSpace(id) {
    return requests({
        url:'/space/delete',
        method:'delete',
        data:{     
            "id": id    
        }
    })
}
