<template>
  <div>
    <ul v-for='(d,index) in dist.district' :key='d.code'>
      <router-link tag='li' to='/shop' @click="handleClick(index)">{{d.name}}</router-link>
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
        return item.city_code=this.$route.query.id
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
        dist:this.dist.district[index].name
      }
      this.change(obj)
    },
  },
  mounted(){
    console.log(this.dist);
    console.log(this.$route.query.id);
  }
}
</script>
<style lang='stylus' scoped>

</style>