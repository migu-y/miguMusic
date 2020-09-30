<template>
    <div class="wrap">
  <!-- <div class="main"> -->
      <ul class="list"> 
          <li>
              <div class="left-img">
                <img :src="goods.thumbnail">
                <!-- {{goods.describe.filter()}} -->
              </div>
              <div class="right-text">
                  <p>{{goods.name}}</p>
                  <p>{{goods.subName}}</p>
                  <span>￥{{(goods.salePrice/100).toFixed(2)}}</span>
                  <div>立即购买</div>
              </div>
          </li>
      </ul>
    </div>
    <!-- </div>
    </div> -->
</template>
<script>
export default {
    props:["goods"]
};
</script>
<style scoped lang="stylus">
@import '~@a/stylus/ellipsis.styl'
.container 
    height 100%
    display flex
    flex-direction column
    .banner  
      height 3rem
      background yellowgreen
      margin-bottom .1rem
     .list 
        flex 1
        background #eee
        overflow-y scroll
        height 60%
        li 
          display flex
          flex-direction row
          height 50%
          padding .1rem .15rem
          margin-bottom .05rem
          background #fff
          .left-img
            img
              width 1.5rem
              height 1.5rem
              background red
              margin-right .15rem
          .right-text
              width 60%
              p:nth-of-type(1) 
                  font-size 0.16rem
                  margin 0.1rem
              
              p:nth-of-type(2) 
                  font-size 0.12rem
                  color #666
                  margin-top: 0.02rem
              

              span 
                  font-size 0.14rem
                  font-weight bold
                  margin-top 0.16rem
                  display block
              

              div 
                  height 0.25rem
                  width 0.7rem
                  background #daa778
                  border-radius 0.06rem
                  color #fff
                  font-size 0.1rem
                  text-align center // 居中对齐
                  line-height 0.25rem
                  margin-top 0.13rem
</style>