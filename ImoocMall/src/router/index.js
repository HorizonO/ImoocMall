import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from "../views/GoodsList";
import Title from "@/views/Title.vue";
import Image from "../views/Image";

//@表示src目录
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({

  routes: [
    {
      // path: '/goods/:goodsId/user/:name',
      path:'/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          //不要/title，加了/就是绝对地址
          path:'title',
          name:'title',
          component:Title
        },
        {
          //不要/title，加了/就是绝对地址
          path: 'img',
          name: 'img',
          component: Image
        }
      ]
    }
  ]
})
