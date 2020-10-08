<template>
    <div class="history">
        <van-tabs type="card" v-model="active">
            <!-- <van-tab title="门店订单">没有门店</van-tab> -->
            <van-tab title="百货订单"><VarietyOrder></VarietyOrder> </van-tab>
            <van-tab title="批量开票"> 请稍候</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import VarietyOrder from "@v/order/historyOrder/VarietyOrder"
Vue.use(Tab);
Vue.use(Tabs);
export default {
data() {
    return {
      active: 1,
    };
  },
  components:{
   VarietyOrder
  }
}
</script>

<style lang="css" >
.van-tabs__nav{
    background-color: #f6f6f6;
}
.van-tabs__nav--card {
    border: none;
    }
.van-tabs__nav--card .van-tab {
    color: #5d5d5d;
    border-right: none
}   
.van-tabs__nav--card .van-tab.van-tab--active {
    color: #d3aa79;
    background-color: #fff;
    flex:1
}
</style>