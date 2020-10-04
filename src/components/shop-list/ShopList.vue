<template>
<div>
  <ul class="shop">
    <li :class="curIndex==index ? 'active' : ''" 
      @click='handleClick(index,$event)'
      v-for='(s,index) in shopList' :key='s.id'>
      <div class="msg">
        <h2 class="van-ellipsis">{{s.name}}</h2>
        <div class="states">
           <div v-if='s.is_open'>制作中</div>
           <div v-else>门店休息</div>
        </div>
        <p class="van-multi-ellipsis--l2">{{s.address}}</p>
        <p>{{s.business_time_list[0].openAt}}~{{s.business_time_list[0].closeAt}}</p>
        <div class="tags" v-if='s.shop_labels.length!==0'>
          <span class="tag" v-for='t in s.shop_labels' :key='t.id'>{{t.name}}</span>
        </div>
      </div>
      <div class="order">
        <h2 v-if='s.is_open'>去下单</h2>
        <h2 v-else>去看看</h2>
        <p>{{(s.distance/1000).toFixed(1)+'km'}}</p>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
import Vue from 'vue';
import {mapState} from 'vuex'

export default {
   data(){
    return{
      curIndex:0
    }
  },
  methods:{
     handleClick(index,e){
      this.curIndex=index
    },
  },
  computed:{
    ...mapState(['data']),
    shopList(){
      console.log(1);
      if(Object.keys(this.data).length===0) return
      // console.log(JSON.parse(JSON.stringify(this.data)));
      return this.data.shopList
    },
  },
   mounted(){
    console.log(JSON.parse(JSON.stringify(this.data)));
  }
}
</script>
<style lang='stylus' scoped>
  .shop{
    width 92%
    margin .1rem auto
    li{
      background #fff
      padding .2rem .1rem
      margin .1rem 0
      display flex
      justify-content center
      align-items center
      border-radius .1rem
      border 1px solid transparent
      &.active{
        border-color #DBA871
      }
      .msg{
        display flex
        width 3rem
        flex-direction column
        border-right 1px solid #EFEFEF
        .tags{
          display flex
          flex-wrap wrap
          align-items center
          .tag{
            color #DBAA74
            border 1px solid #E4BE94
            padding 0 .05rem
            margin-right .08rem
            margin-bottom .05rem
          }
        }
      }
      .order{
        padding.3rem 0 .3rem .2rem
      }
    }
  }
</style>