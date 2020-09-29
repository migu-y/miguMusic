<template>
  <div class="wrap">
      <div class="logoImg">
          <img :src="goods.thumbnail" alt="">
      </div>
      <div class="descGoods">
          <p>{{goods.name}}</p>
          <p>{{goods.itemSalesVolume}}人已购买</p>
      </div>
      <ul>
          <li>¥ {{(goods.salePrice/100).toFixed(2)}}</li>
          <li>+</li>
      </ul>
  </div>
</template>

<script>

export default {
    props:["goods"]
    
};
</script>

<style scoped lang="stylus">
@import '~@a/stylus/ellipsis.styl'
.wrap
    width 1.6rem
    display flex
    flex-direction column
    .logoImg
        width 100%
        height 1.6rem
        img 
            width 100%
            height 100%
    .descGoods
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        p:first-child 
            width 100%
            margin-top 0.1rem
            margin-bottom 0.13rem
            font-size 0.16rem
            color #343434 
            ellipsis()
        p:last-child 
            color #999999
            padding-left 0.16rem
            font-size 0.14rem
    ul 
        display flex
        flex 1
        justify-content space-between
        padding 0 0.06rem 0.04rem 0.16rem
        margin-top .1rem
        li:first-child 
            color #d3aa79 
            font-size 0.18rem
        li:last-child 
            width 0.25rem
            height 0.25rem
            line-height 0.25rem
            text-align center
            font-size .15rem
            background-color #d3aa79
            color #ffffff
            border-radius 0.3rem
       
        
</style>