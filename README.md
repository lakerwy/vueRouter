# vueRouter
学习vue-router的使用

1.引入 npm i vue-router

2.在main.js中引入 import VueRouter from 'vue-router';

3.安装插件Vue.use(VueRouter);

4.创建路由对象并配置路由规则 let router = new VueRouter({routes:[{path:'/home',component:Home}]});

5.将其路由对象传递给Vue的实例，options中加入 router:router

6.在app.vue中留坑 <router-view></router-view>

7.main.js中引入要使用的router组件



