<template>
  <div class="container">
    <header>
      <div class="talk" @click="handleTalkClick"><i class="iconfont icon-shuqian"></i> 想对你说</div>
    </header>
    <nav>
      <ul class="orderNav">
        <keep-alive>
            <van-tabs v-model="active" animated>
              <van-tab  title="当前订单" :key="1">
              <current-order></current-order>
              </van-tab>
              <van-tab  title="历史订单" :key="2">
                <history-order></history-order>
              </van-tab>
            </van-tabs>
        </keep-alive>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import CurrentOrder from "@v/order/currentOrder/CurrentOrder.vue"
import HistoryOrder from "@v/order/historyOrder/HistoryOrder.vue"
Vue.use(Tab);
Vue.use(Tabs);
export default {
data() {
    return {
      active: 1,
    };
  },
  components:{
    CurrentOrder,
    HistoryOrder
  },
  methods:{
    handleTalkClick(){
      this.$router.push("/Talk")
    }
  },
  mounted(){
    console.log(this.$router.history.current.params)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.container 
  height 100%
  display flex
  header 
    height 0.6rem
    display flex
    align-items center
    padding 0 0.2rem
    .talk
      font-size 0.16rem
      color #666
      width 1rem
      height 0.4rem
      line-height 0.4rem
      text-align center
      border-radius 0.2rem
      border 1px solid #ccc
  nav 
    height 100%
    background-color #f6f6f6
    .orderNav
        display flex
        justify-content space-around
        font-size 0.16rem
</style>
<style lang="css">
.van-tab{
 font-size: 0.16rem;
 margin-right:0.2rem
}
.van-tabs {
width:100%
}
.van-tabs__nav {
  display: flex;
  width:100%;
  justify-content: space-around
}
.van-tabs__line{
  width :0.56rem;
  background-color: #000
}
.van-tab--active {
    color: #323233;
    font-weight: 800;
}
.van-tabs__content {
  margin-top: 0.2rem;
}
</style>