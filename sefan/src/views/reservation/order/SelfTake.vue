<template>
  <div class="container">
    <header>
      <div class="header-button">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <h1>喜茶GO</h1>
    </header>
    <main>
      <div class="main-top">
        <div class="top-address" @click='handleAddress'>
          <div class="top-location">
            <i></i>
            <p>北京昌平永旺店</p>
            <span>></span>
          </div>
          <p class="distance">距离您6.8km</p>
        </div>
        <van-switch 
        v-model="checked"
        active-value='true'
        />
      </div>
      <div class="notice-bar">
        <router-link tag='div' 
        :to='more.path' 
        class='more' 
        @click.native='moreClick'>
          <p>{{more.value}}</p>
          <span>v</span>
        </router-link>
      </div>
      <keep-alive>
        <router-view 
        :data='data'
        ></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import http from '@u/http'


  import {Switch} from 'vant'

  Vue.use(Switch)
 
  export default {
    data(){
      return{
        checked:true,
        data:{},
        bool:false,
        more:{
          path:'/more',
          value:'更多'
        }
      }
    },
    
    mounted(){
      this.loadData()
      
    },
    methods:{
      async loadData(){
        let result=await http.get('/items')
        // console.log(result);
        this.data=result.data
        this.$store.dispatch('show',result.data)
      },
      moreClick(){
         if(this.bool){
           this.more={ path:'/more',value:'更多'}
         }else{
            this.more={ path:'/lists',value:'收起'}
         }
         this.bool=!this.bool
      },
      handleAddress(){
        this.$router.push('/shop')
      }
    },
    components:{

    }
  }
</script>

<style lang="stylus" scoped>
  .container{
    display flex
    flex-direction column
    header{
      display flex
      position relative
      height .5rem
      justify-content center
      align-items center
      div{
        position absolute
        left .01rem
        top .05rem
        width .8rem
        height  .35rem
        border 1px solid #ccc
        border-radius .3rem
      }
      h1{
        font-size .18rem
      }
    }
    main{
      display flex
      flex-direction column
      .main-top{
        display flex
        justify-content space-between
        .top-address{
          display flex
          flex-direction column
          width 40%
          .top-location{
            display flex
            width 100%
            font-size .18rem
            font-weight bold
          }
          .distance{
            font-size .14rem
            color #999
            padding-left .15rem
          }
        }
      }
      .notice-bar{
        position relative
        width 100%
        .more{
          z-index 999
          position absolute
          display flex
          top .08rem
          right .15rem
          font-size .14rem
          span{
            padding-left .1rem
          }
        }
      }
    }
  }
 
</style>
