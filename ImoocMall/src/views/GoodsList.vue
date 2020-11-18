<template>
<div>
  <p>这是商品列表页面 Hello</p>
  <span>{{$route.params.goodsId}}</span><br>
  <span>{{$route.params.name }}</span>
  <router-link to="/goods/title">show goods title.</router-link>
  <router-link to="/goods/img">show goods image.</router-link>
  <div>
    <router-view></router-view>
  </div>

</div>
</template>

<script>
export default {
  name: "GoodsList"
}
</script>

<style scoped>

</style>
