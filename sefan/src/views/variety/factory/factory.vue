<template>
  <div class="container">
    <header>
      <div @click="handleClick"><i class="iconfont icon-back"></i></div>
      喜小茶零糖气泡水
    </header>
    <div class="banner">
      <img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/e21de8918bda443db9ae60e74a7e2a7d.jpg"/>
    </div>
      <ul>
        <li v-for="goods in goodsList" :key="goods.id" @click="handleClickDetail(goods)">
            <goods-It :goods="goods" ></goods-It>
        </li>
      </ul>
      <shop-bag></shop-bag>
    </div>
</template>

<script>
import http from "@u/http";
import GoodsIt from "@c/GoodsIt.vue";
import ShopBag from "@c/ShopBag"

export default {
  data() {
    return {
      goodsList: {},
      show: false,
    };
  },
  async mounted() {
    let result = await http.get("/list");
    this.goodsList=result.slice(0,4);
  },
  components: {
    GoodsIt,
    ShopBag
  },
  methods: {
    handleClick() {
      this.$router.push("/variety");
    },
    handleClickDetail(goods){
       this.$router.push({
          name:'laborDetails',
          params:goods
        })
    }
  },
};
</script>


<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.container 
    height 100%
    display flex
    flex-direction column
    .banner
        width 100%
        height 2.6rem
        img
          width 100%
          height 100%
    header 
        height 0.44rem
        background transparent // 背景色透明
        text-align center// 居中对齐
        line-height 0.44rem // 行高
        font-size 0.16rem // 文字大小
        font-weight bold         //文字加粗
        color #000
        position relative
        div
            position absolute 
            left 0.22rem
            top 0.03rem

   .banner 
      
      height 3rem
      
    
   
</style>
<style lang="css">
/* 去掉cell和icon不需要的默认样式 */
.van-cell {
  padding: 0;
  overflow: visible;
}
.van-cell .van-icon {
  display: none;
}
</style>