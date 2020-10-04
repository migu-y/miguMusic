<template>
  <div class="items">
   <!-- <swipe :data='data'></swipe> -->
   <ae></ae>
   <div>
    <div v-for='c in items' :key='c.id'>
      <h3>{{c.name}}</h3>
      <ul>
        <li v-for='i in c.products' :key='i.id' class="goods">
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
              <van-button v-if='a==1'
              round size="mini" color="#DBA871"
              icon="plus" type="info" />
              <van-button v-else-if='a==2'
              round size="mini"
              color="#DBA871"
              type="info">选规格</van-button>
              <h3 v-else>已售罄</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
   </div>
   
  </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';

import { mapState } from 'vuex'
// import Swipe from './Swipe'
import Ae from '@v/reservation/a'

Vue.use(Button)

export default {
  data(){
    return{
      a:1
    }
  },
  props:{
    
  },
  components:{
    // Swipe,
    Ae
  },
   computed:{
    ...mapState(['data']),
    items(){
      // return this.data.categories
      if(Object.keys(this.data).length===0) return
      console.log(this.data);
      return this.data.categories
    },
  },
  mounted(){
    console.log(JSON.parse(JSON.stringify(this.data)));
  }
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