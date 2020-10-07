<template>
 <div>
   <div @click='$router.push("/shop")'>←</div>
   <ul class="top">
    <router-link to='/cout' tag='li' class="cout" @click.native='handleClick'>{{addr.cout}}</router-link>
    <router-link to='/citys' tag='li' class="citys" @click.native='handleClick'>{{addr.city}}</router-link>
    <router-link :to='{path:"/dist",query:{id:addr.city_code}}' tag='li' class="dist" @click.native='handleClick'>{{addr.dist}}</router-link>
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
    ...mapState('location',['addr']),
    citys(){
      console.log(this.data.location);
      return this.data.location.city
    }
  },
  mounted(){
    // console.log(JSON.parse(JSON.stringify(this.data)));
    console.log(this.$route);
  },
  methods:{
    handleClick(e){
      // console.log($(e.target));
      // $(e.target).addClass('active')
      // $(e.target).siblings().removeClass('active')
    }
  },
  watch:{
    '$route.name':function(){
      let name=`.${this.$route.name}`
      console.log($(name));
      $(name).addClass('active').siblings().removeClass('active')
    }
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
  .top{
    height .4rem
    display flex
    padding .1rem  0  0 .05rem
    border-bottom 1px solid #eee
    li{
      height 100%
      margin-right .1rem
      color #999
      &.active{
        color #000
        border-bottom 1px solid #000
      }
    }
  }
  
</style>