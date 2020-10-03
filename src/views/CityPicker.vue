<template>
 <div>
   <div @click='$router.push("/shop")'>←</div>
   <van-tabs v-model="active">
    <van-tab title="国家">

    </van-tab>
    <van-tab title="城市">城市</van-tab>
    <van-tab title="地区">地区</van-tab>
   </van-tabs>
 </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

import { mapState } from 'vuex'

Vue.use(Tab);
Vue.use(Tabs);
export default {
   data() {
    return {
      active: 0
    }
  },
  computed:{
    ...mapState(['data']),
    location(){
      console.log(this.data.location);
      return this.data.location
    }
  },
  mounted(){
    console.log(JSON.parse(JSON.stringify(this.data)));
  }
}
</script>
<style lang='stylus' scoped>

</style>

<style lang="stylus">
  .van-tab{
    flex none
    margin-right .2rem
    font-size .2rem
  }
</style>