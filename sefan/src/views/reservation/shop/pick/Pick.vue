<template>
<div class="container">
  <div class="top">
    <div @click="topClick">{{addr.city}} {{addr.dist}}></div>
    <div class="search"><i></i>搜索</div> 
  </div>
  <div class="map">
    <img ref='img' src="http://via.placeholder.com/375x200" alt="">
    <div @click='tagClick'>{{tag}}</div>
  </div>
  <div class="list">
    <shop-list></shop-list>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import ShopList from '@c/shop-list/ShopList'

import { mapState } from 'vuex'

export default {
   data() {
    return {
      activeNames: ['1'],
      tag:'收起地图^',
      bool:false
    }
  },
  computed:{
    ...mapState('location',{
      addr:state=>state.addr
    })
  },
  methods: {
    tagClick(){
      this.bool=!this.bool
      if(this.bool){
           this.tag='展开地图v'
           this.$refs.img.style.display='none'
         }else{
           this.tag='收起地图^'
           this.$refs.img.style.display='block'
         }
    },
    topClick(){
      this.$router.push('/city')
    }
  },
  components:{
    ShopList
  }
}
</script>
<style lang='stylus' scoped>
  .container{
    width 100%
    display flex
    flex-direction column
    .top{
      height .5rem
      display flex
      justify-content space-between
      align-items center
      >div:first-child{
        padding-left .1rem
      }
      .search{
        background-color #F6F6F6
        padding .05rem .1rem
        border-radius .3rem
        color #999 
      }
    }
    .map{
      >div{
        text-align center
        padding .08rem 0
      }
    }
    .list{
      flex 1
      max-height 4.6rem
      background #F6F6F6
      padding-top .04rem
      overflow-y scroll
    }
  }
</style>