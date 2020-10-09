<template>
  <div class="items" @scroll="scrollHandler($event)">
   <swipe :data='data'></swipe>
   <div>
    <div v-for='c in items' :key='c.id' :class="'i'+c.id">
      <h3>{{c.name}}</h3>
      <ul>
        <li v-for='(i,index) in c.products' :key='i.id' class="goods" @click="showPopup(index,c.products,$event)">
          <img :src="i.images[0].url" alt="">
          <div>
            <h2>{{i.name}}</h2>
            <div v-if='i.labels.length!==0' class="tag">
              <p v-for='p in i.labels' :key='p.id' 
              class="van-ellipsis label"
              >{{p.name}}</p>
            </div>
            <p class="van-multi-ellipsis--l2">{{i.description}}</p>
            <div>
              <span>￥{{i.price}}</span>
              <van-icon name="add" color='#DBA871' size="24" />
              <!-- <van-button v-if='a==1'
              round size="mini" color="#DBA871"
              icon="plus" type="info" />
              <van-button v-else-if='a==2'
              round size="mini"
              color="#DBA871"
              type="info">选规格</van-button> -->
              <!-- <h3 v-else>已售罄</h3> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
   </div>
   <van-popup v-model="show"   :style="{ width: '3.2rem' }" closeable round >
      <MilkDialog :goodsItem='goods' :closeDialog.sync="show"></MilkDialog>
   </van-popup>
</div>
  
</template>
<script>
import Vue from 'vue';
import { Button,Icon } from 'vant';
import MilkDialog from "@c/MilkDialog"


import { mapState,mapActions } from 'vuex'
import Swipe from './Swipe'

Vue.use(Icon);
Vue.use(Button)

let items= document.querySelector('.items')

export default {
  data(){
    return{
      show:false,
      goods:{},
      scrollT:288
    }
  },
  props:{
    
  },
  components:{
    Swipe,
    MilkDialog
  },
   computed:{
    ...mapState(['data']),
    ...mapState('category',['id']),
    ...mapState('itemScroll',['scrollTop']),
    items(){
      if(Object.keys(this.data).length===0) return
      return this.data.categories
    },
  },
  watch:{
    id(newV,oldV){
      this.go(newV)
    },
    // scrollT(newV,oldV){
    //   switch(true){
    //     case  newV>288 && newV<3176:
    //       this.change({index:0,id:20})
    //       break;
    //     case newV>3176 && newV<3889:
    //       this.change({index:1,id:12})
    //       break;
    //     case newV>3889 && newV<5218:
    //       this.change({index:2,id:67})
    //       break;
    //     case newV>5218 && newV<6112:
    //       this.change({index:3,id:17})
    //       break;
    //     case newV>6112 && newV<7441:
    //       this.change({index:4,id:3})
    //       break;
    //     case newV>7441 && newV<7900:
    //       this.change({index:5,id:1})
    //       break;
    //     case newV>7900 && newV<8939:
    //       this.change({index:6,id:11})
    //       break;
    //     case newV>8939 && newV<9833:
    //       this.change({index:7,id:15})
    //       break;
    //     case newV>9833 && newV<10854:
    //       this.change({index:8,id:7})
    //       break;
    //     case newV>10854 && newV<11748:
    //       this.change({index:9,id:6})
    //       break;
    //     case newV>11748 && newV<12915:
    //       this.change({index:10,id:9})
    //       break;
    //     case newV>12915 && newV<13447:
    //       this.change({index:11,id:59})
    //       break;
    //     case newV>13447:
    //       this.change({index:12,id:8})
    //       break;
    //   }
    // }
  },
   methods:{
    ...mapActions('itemScroll',['setScroll']),
    ...mapActions('category',['change']),
    Scroll(){
       if(!this.items) return
       let arr= this.items.reduce((value,item)=>{
      // console.log(document.querySelector(`.i${item.id}`).offsetTop);
        let obj={
          id:item.id,
          st:document.querySelector(`.i${item.id}`).offsetTop
        }
        value.push(obj)
        return value
      },[])
      this.setScroll(arr)
    },
    go(id){
      if(this.scrollTop.length==0) return
      let items= document.querySelector('.items')
      let item=this.scrollTop.find(item=>{
        return item.id==id
      })
      let top=item.st
      items.scrollTop=top-30
    },
    showPopup(index,products,e){
        this.show = true;
        this.goods=products[index]
    },
    scrollHandler(e){
        this.scrollT=e.target.scrollTop
    }
  },
  mounted(){
    // console.log(JSON.parse(JSON.stringify(this.data)));
    // let st= document.querySelector('.items').scrollTop
   this.Scroll()
  //  this.go(this.id)
  },
 
}
</script>
<style lang='stylus' scoped>
 h3{
   font-size .16rem
 }
 .items{
   height 4.75rem
   overflow-y scroll
   overflow-x hidden
   flex 1
   >div{
     width 100%
   }
 }
 img{
   width .9rem
   height .7rem
 }
 .goods{
   width 100%
   padding .2rem .15rem .2rem 0
   display flex
   justify-content center
   align-items center
   >div{
     display flex
     flex-direction column
     h2{
       font-size .16rem
     }
     p{
       font-size .12rem
       color #999
     }
     span{
       font-size .18rem
       font-weight bold
     }
     .tag{
       display flex
       p{
        //  width 6rem
         background-color  #eee
         margin-right .06rem
         padding 0 .04rem
       }
     }
     >div:last-child{
       display flex
       justify-content space-between
       
     }
   }
 }
 .label{
   max-width .8rem
   text-align center
 }


</style>