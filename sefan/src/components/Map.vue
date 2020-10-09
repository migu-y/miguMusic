<template>
  <div id="container"></div>
</template>
<script>
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
import { Dialog } from 'vant';

Vue.use(Dialog)
export default {
  computed:{
    ...mapState('mapLocation',['shopLocation']),
  },
  methods:{
    ...mapActions('shopLocation',['changeShopLocation']),
    getMap(){
        let map = new BMapGL.Map("container")
        let point = new BMapGL.Point(this.shopLocation.x,this.shopLocation.y)
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom(true)
        
        // let  myIcon = new BMapGL.Icon("/public/images/timg.jpg", new BMapGL.Size(20,20));
        let marker = new BMapGL.Marker(point);  
        map.addOverlay(marker); 

        let opts = {
          width: 280,     
          height: 60,    
          title: '喜茶 '+this.shopLocation.title  
          }
        let infoWindow = new BMapGL.InfoWindow(this.shopLocation.info, opts);  
        map.openInfoWindow(infoWindow, point)
        marker.addEventListener("click", function(){          
         map.openInfoWindow(infoWindow, point); 
        }); 
        // map.addEventListener('click',()=>{
        //    Dialog.confirm({
        //   title: '提示',
        //   message: '确定切换到选择的门店嘛',
        // })
        //   .then(() => {
        //     let shopLocation={
        //       name:this.shopLocation.name,
        //       distance:(this.shopLocation.distance/1000).toFixed(1)+'km',
        //       id:this.shopLocation.id
        //     }
        //     this.changeShopLocation(shopLocation)
        //     this.$router.push('/lists')
        //   })
        //   .catch(() => {
        //     // on cancel
        //   })
        // })
      }
  },
  watch:{
      'shopLocation':function watch(){
        this.getMap()
      }
  },
  mounted(){
    this.getMap()
  }
}
</script>
<style lang='stylus' scoped>
  #container{
    height:100%
  } 
</style>