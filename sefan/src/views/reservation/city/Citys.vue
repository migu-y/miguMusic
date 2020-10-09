<template>
<div>
  <ul v-for='c in citys' :key='c.city_code'>
    <router-link tag='li' :to='{path:"/dist",query:{id:c.city_code}}' 
    @click.native='handleClick(c.city_code,c.name)'> {{c.name}}</router-link>
  </ul>
</div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['data']),
    citys(){
      if(!this.data) return
      return this.data.location[0].city
    },
  },
  mounted(){
    // console.log(JSON.parse(JSON.stringify(this.data)));
    // console.log(this.citys);
  },
  methods:{
     ...mapActions('location',{
      change:'changeAddr'
    }),
    handleClick(code,name){
      this.change({
         cout:'中国',
          city:name,
          city_code:code,
          dist:'全部地区',
          code:''
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
  ul{
    li{
      padding 0 0 .05rem .1rem
      font-size .16rem
    }
  }
</style>