<template>
<div>
  <p>这是商品列表页面 Hello</p>
  <span>{{$route.params.goodsId}}</span><br>
  <span>{{$route.params.name }}</span>
  <router-link to="/goods/title1">show goods title.</router-link>
  <router-link to="/goods/img">show goods image.</router-link>
  <router-link to="/goods/test">show goods test.</router-link>
<!--<button @click="jump">button - 跳转到购物车页面</button>-->
<!--  <router-link to="/cart">跳转到购物车页面</router-link>-->
  <router-link v-bind:to="{name:'Cart',params:{cartId:123}}">跳转到购物车页面</router-link>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      msg:"hello vue"
    }
  },
  // methods:{
    // jump(){
      // this.$router.push('/cart')
      //传参
      // this.$router.push({path:'/cart?goodsId=123'});

      //back
      // this.$router.go(-2);
    // }


}
</script>

<style scoped>

</style>
