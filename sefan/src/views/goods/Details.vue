<template>
    <div class="container">
        <van-nav-bar
  title="商品详"

  left-text=""
 
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
        <div class="container1">
          <img :src="thumbnail" alt="">
          <div class="container2">
            <p>
            ￥{{(labelPrice/100).toFixed(2)}}
            <span>{{itemSalesVolume}}人已购买</span>
            </p>
            <p> {{name}}</p>
            <p>{{subName}}</p>
          </div>
        </div>
        
        
        
        
      <footer></footer> 
    </div>
</template>
<script>
import Vue from 'vue'
import Header from '../../components/Header'
import { mapState } from 'vuex'



import { NavBar,Toast } from 'vant';

Vue.use(NavBar);
export default {
    
    components:{
      Header
    },
     computed: {
    ...mapState(['id','thumbnail','describe','subName','subName','name','itemSalesVolume','labelPrice'])
    },
  methods: {
    onClickLeft() {
      Toast('返回');

      this.$router.push('/Goods')
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  height 6.67rem
  display flex
  flex-direction column
  
  .container1
    flex 1
    img 
      height 3.5rem
      width 100%
    
    .container2
      padding 0.16rem
      p:first-child
        font-size 0.2rem
        line-height 0.51rem
        color #d9b672
        span 
          display block
          float right
          font-size 0.1rem
          color #9e9e9e
      p:nth-child(2)
        font-size 0.18rem
        line-height 0.38rem
      
      p:last-child
        font-size 0.12rem
        color #9e9e9e
  footer 
      height 0.5rem
      background #f7f7f7
</style>