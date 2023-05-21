import Vue from 'vue'
import VueRouter from 'vue-router'


//注册
Vue.use(VueRouter);

const routes = [
    {
      name:'首页',
      component:() => import('views/index/Index'),
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
];

const router = new VueRouter({
    routes:routes,
    mode:'history'
});

router.beforeEach((to,from,next)=>{
    // let white_list = ['/unloginprofile','/profile'];
    // if(white_list.indexOf(to.path)!==-1){
    //
    //
    // }
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
});
export default router;