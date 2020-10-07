<template>
  <div id="container"></div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState('mapLocation',['shopLocation']),
  },
  methods:{
    getMap(){
        let map = new BMapGL.Map("container")
        let point = new BMapGL.Point(this.shopLocation.x,this.shopLocation.y)
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom(true)
        let marker = new BMapGL.Marker(point);  // 创建标注
        map.addOverlay(marker);     
        let opts = {
          width: 280,     // 信息窗口宽度
          height: 60,    // 信息窗口高度
          title: '喜茶 '+this.shopLocation.title  // 信息窗口标题
          }
        let infoWindow = new BMapGL.InfoWindow(this.shopLocation.info, opts);  // 创建信息窗口对象 
        map.openInfoWindow(infoWindow, point)
        marker.addEventListener("click", function(){          
         map.openInfoWindow(infoWindow, point); //开启信息窗口
        }); 
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