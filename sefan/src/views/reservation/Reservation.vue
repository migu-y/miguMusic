<template>
  <div class="container">
    <header>
        <van-nav-bar
          title="喜茶GO"
          left-arrow
          @click-left="onClickLeft"
        />
    </header>
      
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
  height 100%
  header
      height 0.44rem
      background #ffffff
      text-align center
      line-height 0.44rem
      font-size 0.16rem
      font-weight bold
      color #000
        
</style>