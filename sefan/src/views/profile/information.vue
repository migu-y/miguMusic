<template>
  <div>
    <header>
      <van-nav-bar
        title="消息中心"
        left-arrow
        @click-left="onClickLeft"
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
      this.$router.back()
    },
  },
};
</script>
 
 
<style lang="stylus" scoped></style>