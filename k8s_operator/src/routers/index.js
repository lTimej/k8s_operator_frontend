import Vue from 'vue'
import VueRouter from 'vue-router'

//注册
Vue.use(VueRouter);

const routes = [
    {
      name:'首页',
      component:() => import('views/index/MyResource'),
      path:'/',
      meta:{
        title: "首页"
      }
    },
    {
        name:'登录',
        component:() => import('views/user/Login'),
        path:'/login',
        meta:{
          title: "登录"
        }
    },
    {
        name:'注册',
        component:() => import('views/user/Register'),
        path:'/register',
        meta:{
          title: "注册"
        }
    },
    {
      name:'我的资源',
      component:() => import('views/index/MyResource'),
      path:'/resource',
      meta:{
        title: "资源"
      }
  },
  {
    name:'空间模板',
    component:() => import('views/index/SpaceTemplate'),
    path:'/space/template',
    meta:{
      title: "空间模板"
    },
  },
  {
    name:'工作空间',
    component:() => import('views/index/Space'),
    path:'/space',
    meta:{
      title: "工作空间"
    }
  }
];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err => err)
}

const router = new VueRouter({
    routes:routes,
    mode:'history'
});

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
      document.title = to.meta.title;
    }
    console.log(from,"77777777777",to)
    let white_list = ['/login','/register'];
    if(white_list.indexOf(to.path)!==-1){
      next();
      return;
    }
    var token = window.sessionStorage.getItem("token")
    if(token == "" || token == null){
      next("/login")
      return
    }
    next();
});
export default router;
