<template>
 <div class="container">
    <div class="header">
        <van-nav-bar
            title="订单结算"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
    <div class="main">
      <div class="express">
        <van-notice-bar mode="closeable">
          喜茶百货商品均为快递寄送
        </van-notice-bar>
      </div>
      <div class="address">
        <span class="addrIcon iconfont icon-location"></span>
        <p class="addrInfo">
          <span>昌平地铁站A西北口</span>
          <span>由（先生）16478945656</span>
        </p>
        <span class="rightArrow iconfont icon-xiangyou"></span>
      </div>
      <div class="orderList">
        <ul class="list">
          <li v-for="goods in products" :key="goods.id">
            <img :src="goods.thumbnail" alt="">
            <div class="itemInfo">
              <p class="itemName">{{goods.name}}</p>
              <p class="itemTaste">口味规格：酥脆海苔味*2</p>
            </div>
            <div class="itemTotal">
              <p>¥{{goods.salePrice/100}}</p>
              <p>x {{goods.quantity}}</p>
            </div>
          </li>
        </ul>
        <div class="transfer">
          <span>配送方式</span>
          <span class="default">快递¥ 0</span>
        </div>
        <div class="transfer">
          <span>喜茶券</span>
          <span>暂无可用 ></span>
        </div>
        <div class="transfer">
          <span>备注</span>
          <span>如需备注请输入</span>
        </div>
        <div class="total">
          共 <span class="count"> {{count}} </span> 件商品,小计 <p class="totalPrice"> ¥ {{total}}</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="price">合计 ¥ {{total}}</div>
      <div class="btnTotal" @click="handlePayClick">支付</div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';
import {mapState,mapGetters} from "vuex"
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(NoticeBar);

export default {
  computed:{
    ...mapState("cart",{
        products: 'items'
    }),
    ...mapGetters('cart', ['total',"count"]),
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    },
    handlePayClick(){
      Toast.success('支付成功');
      this.$router.push('/order');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@a/stylus/border.styl"
  @import "~@a/stylus/ellipsis.styl"
.container 
    height 100%
    width 100%
    display flex
    flex-direction column
    overflow-y scroll
    .main 
      display flex
      flex 1
      flex-direction column
      background-color #f7f7f7
      .express 
        padding-left 0.2rem
        background-color #fffbe8
        border_1px(0 0 1px 0)
      .address
        height 0.6rem
        display flex
        justify-content space-evenly
        align-items center
        background-color #fff
        .addrInfo
          display flex
          color #343434
          font-size 0.18rem
          flex-direction column
          line-height 0.3rem
      .orderList 
        display flex
        flex-direction column
        padding 0  0.2rem
        margin-top 0.1rem
        background-color #fff
        .list 
          
          overflow-y scroll
          li 
            display flex 
            height 0.9rem
            padding-top 0.1rem
            border_1px(0 0 1px 0)
            img 
              width 0.6rem
              height 0.6rem
            .itemInfo 
              flex 1
              padding-left 0.2rem
              .itemName 
                font-size 0.16rem
                color #343434
                line-height 0.3rem
                font-weight bold
                ellipsis()
              .itemTaste 
                font-size 0.12rem
                color #a1a1a1
                line-height 0.2rem
            .itemTotal 
              width .44rem
              p:first-child 
                font-size 0.16rem
                color #343434
                line-height 0.3rem
                font-weight bold
              p:nth-child(2)
                font-size 0.12rem
                color #a1a1a1
                line-height 0.2rem
        .transfer 
          display flex
          height 0.48rem
          padding-top 0.1rem
          justify-content space-between
          font-size 0.16rem
         
          span:first-child 
            color #343434
            font-weight bold
          span:nth-child(2)
            color #a1a1a1
          span.default 
            color #343434
        .total 
          display flex 
          justify-content flex-end
          align-items center
          color #a1a1a1
          font-size 0.12rem
          line-height 0.4rem
          p.totalPrice 
            color #343434
            font-size 0.14rem
            padding-left 0.04rem
    footer 
      height 0.56rem
      display flex
      justify-content flex-end
      align-items center
      .price 
        color #343434
        font-size 0.14rem
      .btnTotal 
        width  33.3%
        text-align center
        line-height 0.56rem
        height 100%
        background-color #daa871
        color #fff
        margin-left 0.2rem
</style>

<style lang="css">
.van-icon{
  color: rgb(56,58,60);
  font-size: 0.2rem
}
.van-nav-bar__title{
   font-size: 0.19rem;
   font-weight: 800;
}
.van-toast{
  background-color:#fff
}
.van-toast__text{
  color: green;
}
</style>