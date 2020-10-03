<template>
  <div class="con">
    <div class="header">
      <div>
        <van-nav-bar
          title="夫子来喜 主题周边"
          left-text=""
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
    </div>
    <div class="main">
        <around :data='aroundList'></around>
    </div>
  </div>
</template>

<script>
import http from '@u/http.js'
import Vue from "vue";
import { NavBar } from "vant";
import around from '@c/around.vue';
Vue.use(NavBar);

export default {
    data(){
        return{
            aroundList:[]
        }
    },
  components: {
    around,
  },
  methods: {
    onClickLeft() {
      this.$router.push('/soularound/cup')
    },
  },
  async mounted(){
      let result = await http.get('/around')
      this.aroundList = result;
    //   console.log(this.aroundList)
  }
}
</script>

<style lang="stylus" scoped>
.con
    display flex
    height 100%
    flex-direction column

    .main
        background-color rgb(246,246,246)
        overflow-y auto
        flex 1
        padding-top .1rem

</style>