<template>
<div class="wrap">
    <div class="header">
      <div>
        <van-nav-bar
            title="灵感周边"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
        />
      </div>
    </div>
    <div class="banner">
      <router-link to='/happy' tag="li">
        <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/ad733e348bc444788a1f989f8a98be00.png" alt="">
      </router-link>
    </div>

    <div class="main">
        <van-tabs v-model="active" line-width='.6rem' color='rgb(227,188,145)' title-active-color='rgb(227,188,145)' duration='0'>
          <van-tab title="杯类产品" to='/cup'></van-tab>
          <van-tab title="包袋类" to='bag'></van-tab>
          <van-tab title="手机壳" to='phoneke'></van-tab>
          <van-tab title="其他周边" to='others'></van-tab>
        </van-tabs>
    </div>

    <div class="sorts">
        <van-tabs v-model="activeSort" line-width='0rem' line-height='0rem' color='rgb(227,188,145)' title-active-color='rgb(227,188,145)' duration='0'>
          <van-tab title="综合" ></van-tab>
          <van-tab title="销量" ></van-tab>
          <van-tab title="价格" ></van-tab>
        </van-tabs>
    </div>

    <div class="info_list">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Toast ,Tab , Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

Vue.use(NavBar)
  export default {
    data() {
      return {
        active :0,
        activeSort:0
      };
    },

    methods: {
    onClickLeft() {
      this.$router.push("/variety")
    },

    mounted(){
      console.log('1')
    }
  },
  }
</script>

<style lang="stylus" scoped>
.wrap
  display flex
  flex-direction column
  height 100%
  .main
    width 90%
    margin-top .05rem
    height .45rem
    padding-left .1rem
  .sorts
    width 50%
  .banner
    width 100%
    img
      width 100%
      height 2.8rem;
  .info_list
    flex 1
    overflow-y scroll
    background-color rgb(246,246,246)
    // display flex

</style>

<style lang="stylus">
.header
  .van-icon
    color rgb(56,58,60)
    font-size .2rem 
  .van-nav-bar__title
    font-size .19rem
    font-weight 500
.main
  .van-tab__text 
    font-size .17rem
.sorts
  .van-tab
    width .01rem
    .van-tab__text 
      font-size .14rem
  
</style>

