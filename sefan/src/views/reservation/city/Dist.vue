<template>
  <div>
    <ul v-for='(d,index) in dist.district' :key='d.code'>
      <li @click="handleClick(index)">{{d.name}}</li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
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
    handleClick(index){
      let obj={
        cout:'中国',
        city:this.dist.name,
        dist:this.dist.district[index].name
      }
      this.$store.dispatch('changeAddr',obj)
    }
  },
  mounted(){
    console.log(this.dist);
    console.log(this.$route.query.id);
  }
}
</script>
<style lang='stylus' scoped>

</style>