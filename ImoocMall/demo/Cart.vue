<template>
<div>
  <p>This is cart page</p>
<!--  获取GoodsList里面传的参数-->
  <span>
    {{ $route.query.goodsId}}
  </span>
</div>
</template>

<script>
export default {
data(){
  return{
    msg:"hello vue",
  }
}
}
</script>

<style scoped>

</style>
