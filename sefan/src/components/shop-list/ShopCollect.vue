<template>
<div>
  <ul class="shop">
    <li :class="curIndex==index ? 'active' : ''" 
      v-for='(s,index) in shopList' :key='s.id'
      >
      <div class="msg" @click='msgClick(s.longitude,s.latitude,s.name,s.address,index,$event)'>
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
      <div class="order" @click='orderClick(s.name,s.distance,$event)'>
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
import {mapState,mapActions} from 'vuex'
import { Dialog } from 'vant';

Vue.use(Dialog)


export default {
   data(){
    return{
      curIndex:0
    }
  },
  methods:{
    ...mapActions('mapLocation',['change']),
    ...mapActions('shopLocation',['changeShopLocation']),
     orderClick(name,distance,e){
      Dialog.confirm({
        title: '提示',
        message: '确定切换到选择的门店嘛',
      })
        .then(() => {
          let shopLocation={
            name,
            distance:(distance/1000).toFixed(1)+'km'
          }
          this.changeShopLocation(shopLocation)
          this.$router.push('/lists')
        })
        .catch(() => {
          // on cancel
        })
    },
    msgClick(long,lat,name,addr,index,e){
      this.curIndex=index
      let mapLocation={
              x:long,
              y:lat,
              title:name,
              info:addr
            }
            this.change(mapLocation)
    }
  },
  computed:{
    ...mapState('shopCollect',['shopCollect']),
    shopList(){
      console.log(this.shopCollect);
      if(Object.keys(this.shopCollect).length===0) return
      return this.shopCollect
    },
  },
   mounted(){
    // console.log(JSON.parse(JSON.stringify(this.data)));
  },
  
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