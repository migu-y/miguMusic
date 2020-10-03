<template>
  <div>
    <div class="notice-bar">
      <van-notice-bar 
      left-icon="volume-o" :scrollable="false"
      color='#999'
      background='#fff'
      >
        <van-swipe
          vertical
          class="notice-swipe"
          autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item 
          v-for='i in data.notice' :key='i.id'
          class="van-ellipsis"
          >{{i.content}}</van-swipe-item>

        </van-swipe>
      </van-notice-bar>
    </div>
    <div class="list">
      <category :data='data'></category>
      <items :data='data'></items>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Category from '@c/order-list/Category'
import Items from '@c/order-list/Items'
import { NoticeBar,Swipe,SwipeItem } from 'vant'

 Vue.use(NoticeBar)
 Vue.use(Swipe)
 Vue.use(SwipeItem)
export default {
  props:{
    data:{
      type:Object
    }
  },
  components:{
    Category,
    Items
  },
  mounted(){
    // console.log(this.data);
  }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis';
   .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .notice-bar{
    width 86%
  }
  // .van-swipe-item{
  //   ellipsis()
  //   width 83%
  // }
  .list{
    display flex
  }
</style>

