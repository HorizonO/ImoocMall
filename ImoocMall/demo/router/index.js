import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from "../views/GoodsListDemo";
import Title from "@/views/Title.vue";
import Image from "../views/Image";
import Test from "../views/Test";
import Cart from "../views/Cart";

//@表示src目录
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({

  routes: [
    {
      // path: '/goods/:goodsId/user/:name',
      path:'/',
      name: 'GoodsList',
      components: {
        default:GoodsList,
        title:Title,
        img:Image
      },
      // children:[
      //   {
      //     //不要/title，加了/就是绝对地址
      //     path:'title1',   //这里设置了路径，连接到Title组件
      //     name:'title',
      //     component:Title
      //   },
      //   {
      //     //不要/title，加了/就是绝对地址
      //     path: 'img',
      //     name: 'img',
      //     component: Image
      //   },
      //   {
      //     path:'test',
      //     name:'test',
      //     component: Test
      //   }
      // ]
    },
    {
      path:'/cart/:cartId',
      name: 'Cart' ,
      component: Cart,
    },
  ]
})
