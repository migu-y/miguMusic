<template>
<div>
  <h2 @click='handleClick' >
    <van-icon name="arrow-left" class="arrow"/>
    <p>选择门店</p>
  </h2>
  <van-tabs 
  v-model="active" animated
  title-active-color='#DBA871'
  line-width='60px'
  line-height='2px'>
    <van-tab title="选择门店">
      <my-pick></my-pick>
    </van-tab>
    <van-tab title="常用/收藏">
      <collect></collect>
    </van-tab>
  </van-tabs>

</div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { mapActions } from 'vuex'

import MyPick from './pick/Pick'
import Collect from './collect/Collect'

import http from '@u/http'

Vue.use(Tab);
Vue.use(Tabs);

let result
export default {
  data(){
    return{
      active:0
    }
  },
  components:{
    MyPick,
    Collect
  },
  methods:{
    handleClick(){
      this.$router.push('/lists')
    }
  },
  async mounted(){
    let result=await http.get('/items')
    // console.log(result.shopList);
  },
  ...mapActions('shopList',['showList'])
}
</script>
<style lang='stylus' scoped>
  h2{
    // text-align center
    font-size .16rem
    font-weight bold
    display flex
    position relative
    justify-content center
    .arrow{
      position absolute
      left 0
    }
  }
</style>
<style lang="stylus">
  .van-tabs__line{
    background-color #DBA871
  }
  .van-tab__text{
    font-size .14rem
    font-weight bold
  }
  .van-tabs__nav--line{
    justify-content space-evenly
  }
</style>