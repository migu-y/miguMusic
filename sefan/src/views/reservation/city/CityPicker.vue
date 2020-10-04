<template>
 <div>
   <div @click='$router.push("/shop")'>←</div>
   <ul>
    <router-link to='/cout' tag='li'>国家</router-link>
    <router-link to='/citys' tag='li'>城市</router-link>
    <router-link to='/dist' tag='li'>地区</router-link>
   </ul>
    <router-view></router-view>
 </div>
</template>
<script>

import { mapState } from 'vuex'


export default {
   data() {
    return {
    }
  },
  computed:{
    ...mapState(['data']),
    citys(){
      console.log(this.data.location);
      return this.data.location.city
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