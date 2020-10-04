<template>
  <div class='container'>
    <ul class="category" @scroll="handleScroll">
      <li v-for='(i,index) in data.categories' :key="i.id" 
      :class="curIndex==index ? 'active' : ''" 
      @click='handleClick(index,$event)'>
        <img :src="i.category_image_url" alt="">
        <p>{{i.name}}</p>
        <!-- <span>{{i.label.name}}</span> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object
    },
  },
  data(){
    return{
      curIndex:0
    }
  },
  methods:{
    handleClick(index,e){
      this.curIndex=index
      // console.log(e);
    },
    handleScroll(e){
      console.log(e);
    }
  },
  mounted(){
    // console.log(this.curIndex);
  }
}
</script>
<style lang='stylus' scoped>
.container{
  width .9rem
  .category{
    width 100%
    height 4.75rem
    overflow-y scroll
    li{
      position relative
      display flex
      flex-direction column
      justify-content center
      align-items center
      padding .1rem .05rem
      background-color rgb(246 246 246)
      p{
        font-size .14rem
        text-align center
      }
      &.active{
        background-color #fff
        border-left .04rem solid rgb(213 168 127)
      }
      img{
        width .22rem
        height .22rem
      }
      p{
        margin-top .02rem
        font-weight bold
      }
      span{
        position absolute
        top 0
        right 0
      }
    }
  }
}
</style>
