<template>
  <div class='container'>
    <shop-collect></shop-collect>
    <div class="nomore">-没有更多了-</div>
  </div>
</template>
<script>
import ShopCollect from '@c/shop-list/ShopCollect'
export default {
  components:{
    ShopCollect
  }
}
</script>
<style lang='stylus' scoped>
  .nomore{
    text-align center
  }
</style>