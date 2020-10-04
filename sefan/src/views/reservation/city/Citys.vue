<template>
<div>
  <ul v-for='c in citys' :key='c.city_code'>
    <router-link tag='li' :to='{path:"/dist",query:{id:c.city_code}}'> {{c.name}}</router-link>
  </ul>
</div>
</template>
<script>
import {mapState} from 'vuex'
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
  }
}
</script>

<style lang='stylus' scoped>

</style>