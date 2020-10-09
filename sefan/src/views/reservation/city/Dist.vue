<template>
  <div>
    <ul v-for='(d,index) in dist.district' :key='d.code'>
      <li @click="handleClick(index)">{{d.name}}</li>
    </ul>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['data']),
    dist(){
      if(!this.data) return
      return this.data.location[0].city.find(item=>{
        return item.city_code==this.$route.query.id
      })
    },
  },
  methods:{
    ...mapActions('location',{
      change:'changeAddr'
    }),
     handleClick(index){
      let obj={
        cout:'中国',
        city:this.dist.name,
        city_code:this.dist.city_code,
        dist:this.dist.district[index].name,
        code:this.dist.district[index].code
      }
      this.change(obj)
      this.$router.push('/shop')
    },
  },
  mounted(){
    console.log(this.dist);
    console.log(this.$route.query.id);
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