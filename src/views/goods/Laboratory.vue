<template>
    <div >
        <van-nav-bar
  title="喜茶实验室"

  left-text=""
 
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar,Toast } from 'vant';

Vue.use(NavBar);
export default {
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

<style lang="stylus">


</style>