<template>
  <div>
    <header>
      <van-nav-bar
        title="会员码"
        left-arrow
        @click-left="onClickLeft"
        placeholder
      />
    </header>
    <div class="mian">
      <img src="../../../public/images/VIP.jpg" alt="">
    </div>
  </div>
</template>
 
 
<script>
import { Toast } from 'vant';
import Vue from 'vue';
import { NavBar } from 'vant';

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
.mian{
  width 100%
  height 6rem
}
.mian>img{
  width 100%
}
</style>