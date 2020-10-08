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
        
        let  myIcon = new BMapGL.Icon("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602153906290&di=856e4b3388346f4c15c898e3b72eb461&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171115%2Fbf61d3c9c6294b87b0d3ee0bcbd0080b.png", new BMapGL.Size(20,20));
        let marker = new BMapGL.Marker(point,{
          icon:myIcon
        });  
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