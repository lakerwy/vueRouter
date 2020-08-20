import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import News from './components/News'

Vue.config.productionTip = false

Vue.use(VueRouter);

let router=new VueRouter({
  routes: [
    
    {
      path: '/', 
      redirect: '/News'  //设置默认进来页面
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
