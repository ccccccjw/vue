import Vue from 'vue'
//1.导入路由组件vue-router
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import xiaopan from '../components/xiaopan.vue'
//2.调用vue-router
Vue.use(Router)
//3.创建vue-router实例
export default new Router({
  routes: [
    {
      path: '/is',
      component: HelloWorld,
    },
    {
      path:'/xp',
      component:xiaopan,
    }
  ]
});
