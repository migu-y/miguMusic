<template>
  <div>
    <header>
      <van-nav-bar
        title="消息中心"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        placeholder
      />
    </header>
    <div class="mian">
      <van-empty description="消息列表为空" />
    </div>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Empty } from 'vant';
import { Toast } from "vant";

Vue.use(Empty);
Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
 
 
<style lang="stylus" scoped></style>