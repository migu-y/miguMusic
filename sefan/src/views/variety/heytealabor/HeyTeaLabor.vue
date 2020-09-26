<template>
  <div class="container">
    <header>
      <div @click="handleCityClick">箭头</div>
      喜茶实验室
    </header>
    <div class="banner">
      <img src="https://go.cdn.heytea.com/storage/ad/2020/09/20/c1262c3c295f419283f8d13e13dffc6d.jpg" alt="">
    </div>
    <nav>
      <ul class="title">
          <li>茶茶力荐</li>
          <li>喜茶联名</li>
      </ul>
      <div>
          <ul class="filter">
            <li>综合</li>
            <li>销量</li>
            <li>价格</li>
          </ul>
          <div class="toggle">图标</div>
      </div>
    </nav>
    <div class="main">
      <ul class="list">
            <li>
                <goods-item></goods-item>
            </li>
             <li>
                <goods-item></goods-item>
            </li>  
            <li>
                <goods-item></goods-item>
            </li>
             <li>
                <goods-item></goods-item>
            </li>
            <li>
                <goods-item></goods-item>
            </li>
             <li>
                <goods-item></goods-item>
            </li>  
            <li>
                <goods-item></goods-item>
            </li>
             <li>
                <goods-item></goods-item>
            </li>    
      </ul>
    </div>
  </div>
</template>

<script>
import http from '@u/http'
import GoodsItem from "@c/GoodsItem.vue";

export default {
  components: {
    GoodsItem,
  },
  async mounted(){
    let result = http.get("")
  },
  methods:{
      handleCityClick() {
      this.$router.push('/variety')
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@a/stylus/border.styl'
.container 
    height 100%
    display flex
    flex-direction column
    overflow-y scroll
    header 
        height 0.44rem
        background #ffffff
        text-align center
        line-height 0.44rem
        font-size 0.16rem
        font-weight bold
        color #000
        position relative
        div
            position absolute 
            left 0.22rem
            top 0.03rem
    .banner
        width 100%
        height 2.6rem
        img 
          width 100%
          height 100%
    nav 
        display flex
        flex-direction column
        .title 
          display flex
          height 0.6rem
          line-height 0.6rem
          font-size 0.18rem
          justify-content flex-start
          align-items center
          padding 0 0.2rem
          li:first-child 
            color #d3aa79
            border_1px(0 0 2px 0,#d3aa79)
            margin-right 0.5rem
        div
            display flex
            height 0.4rem
            align-items center
            justify-content space-between
            .filter
                display flex
                font-size 0.16rem
                padding 0 0.2rem
                li 
                  padding-right 0.2rem 
                li:first-child 
                  color #d3aa79
            .toggle
               width 0.4rem
    .main 
        flex 1
        background-color #f6f6f6
        padding .2rem
        .list 
            display flex
            flex-wrap wrap
            li 
                height 2.4rem
                margin-bottom .1rem
                border-radius .1rem
                background-color #ffffff
            li:nth-child(2n+1)
                    margin-right .15rem
                    

  

</style>