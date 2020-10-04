<template>
<div class="container"
 @click='handleClick'
 v-if='msg'>
  <ul>
    <li v-for='i in data.notice' :key='i.id'>
      <i></i>
      <p>{{i.content}}</p>
    </li>
    
  </ul>
  <div>
    <h2>配送</h2>
    <p>满30元起送</p>
    <p>配送费7元(晚上20:00后夜间配送加价)</p>
    <p>由顺丰提供配送服务,距门店3000m范围内起送(配送范围受地区、天气等多方因素影响,以实际可配送距离为准)</p>
  </div>
  <div>
    <h2>门店信息</h2>
    <p>地址:{{msg.address}}</p>
    <p>电话:{{msg.contact_phone}}</p>
    <p>营业时间:{{msg.business_time_list[0].openAt}}~{{msg.business_time_list[0].closeAt}}</p>
    <p>外卖营业时间:{{msg.business_time_list[1].openAt}}~{{msg.business_time_list[1].closeAt}}</p>
  </div>

</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props:{
    
  },
  methods:{
    handleClick(){
      this.$router.push('/list')
    }
  },
  computed:{
    ...mapState(['data']),
    msg(){
      return this.data.message
    },
  },
   mounted(){
    console.log(JSON.parse(JSON.stringify(this.data)));
  }
}
</script>
<style lang='stylus' scoped>
  .container{
    padding .24rem 0 0 .12rem
  }
  h2{
    font-size .16rem
    padding .05rem 0
  }
  p{
    width 90%
    font-size .14rem
    color #999
    padding-bottom .05rem
  }
</style>