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
