<template>
  <div>
    <header>
      <van-nav-bar
        title="更多"
        left-arrow
        @click-left="onClickLeft"
        placeholder
      />
    </header>
    <div class="mian">
      <van-cell title="星球移民" is-link size="large" value="旧星球会员卡升级" />
      <van-cell title="个人资料" is-link size="large" />
      <van-cell title="关于喜茶" is-link size="large" value="版本号（2.4.2）" />
    </div>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Empty } from 'vant';
import { Toast } from "vant";
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
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