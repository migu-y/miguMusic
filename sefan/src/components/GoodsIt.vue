<template>
    <div class="wrap">
  <!-- <div class="main"> -->
      <ul class="list"> 
          <li>
              <div class="left-img">
                <img :src="goods.wxItem.thumbnail">
                <!-- {{goods.describe.filter()}} -->
              </div>
              <div class="right-text">
                  <p>{{goods.wxItem.name}}</p>
                  <p>{{goods.wxItem.subName}}</p>
                  <span>￥{{(goods.wxItem.salePrice/100).toFixed(2)}}</span>
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
     .list 
        flex 1
        background #eee
        overflow-y scroll
        height 60%
        padding-top .05rem
        li 
          display flex
          flex-direction row
          background #fff
          height 50%
          padding .05rem .15rem
          margin .02rem .05rem
          .left-img
            img
              width 1.3rem
              height 1.3rem
              margin .1rem .15rem .1rem 0
              
          .right-text
              width 60%
              p:nth-of-type(1) 
                font-size 0.14rem
                line-height  0.14rem
                margin-top 0.2rem
                ellipsis()
              p:nth-of-type(2) 
                  font-size 0.12rem
                  line-height 0.12rem
                  padding-top 0.05rem
                  color #999
              
              span 
                  font-size 0.16rem
                  font-weight bold
                  margin-top 0.15rem
                  display block
              

              div 
                  height 0.25rem
                  width 0.7rem
                  background #daa778
                  border-radius 0.25rem
                  color #fff
                  font-size 0.1rem
                  text-align center // 居中对齐
                  line-height 0.25rem
                  margin-top 0.08rem
</style>