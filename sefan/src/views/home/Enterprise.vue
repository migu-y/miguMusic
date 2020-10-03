<template>
  <div class="container">
    <header>
        <van-nav-bar
          title="企业团餐"
          left-arrow
          @click-left="onClickLeft"
        />
    </header>
    <main>
        <img src="https://go.cdn.heytea.com/storage/products/2020/10/01/8ae4ef94c5ae49119e175e9f3cb730d4.jpeg" alt="">
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
   
  },
};
</script>

<style lang="stylus" scoped>
.container
    width 100%
    height 100%
    display flex
    flex-direction column
    header
        width 100%
        height 0.44rem
        background #ffffff
        text-align center
        line-height 0.44rem
        font-size 0.16rem
        font-weight bold
        color #000
    main 
        flex 1
        width 100%
        background-color gold
        img 
            width 100%
            height 100%

        
</style>