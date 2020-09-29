<template>
    <div class="contain">
        <header>
            <div @click="handleClick"><i class="iconfont icon-back"></i></div>
            商品详情
        </header>
        <div class="swiper">
            <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in swipeList" :key="item.id"><img :src="item.imageUrl" alt=""></van-swipe-item>
            </van-swipe> -->
        </div>
        <main>  
            <ul class="detail">
                <li>
                    <span>¥ {{(goods.salePrice/100).toFixed(2)}}</span>
                    <span>{{goods.itemSalesVolume}}人已购买</span>
                </li>
                <li>{{goods.name}}</li>
                <li>{{goods.subName}}</li>
            </ul>
            <div class="expressInfo">
                <div class="brand">
                    <span>品牌</span> 
                    <span>喜茶</span> 
                </div>
                <van-address-edit

                />
                <div class="brand">
                    <span>运费</span> 
                    <span>满30.00元包邮</span> 
                </div>
            </div>
            <div class="detailImg">
                <p class="title">商品详情</p>
                <div>
                    <p><img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/0e54cb983884462ca5adfbc91ce3f657z" ><img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/5ebb6e67f19d4f3baa986048844dd945z" ><img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/5226037349d146458f385f67e8d11804z" ><img src="https://prod-mall-cos-1252929494.cos.ap-guangzhou.myqcloud.com/f1ca48c88dc9438abfefa9ca57c43dca.png" ></p>
                </div>
            </div>
        </main>
        <footer>
            <div>
                <p>
                    <i class="iconfont icon-mall"></i>
                    <span>百货</span> 
                </p>
                <p>
                    <i class="iconfont icon-kefu"></i>
                    <span>客服</span> 
                </p>
            </div>
            <ul>
                <li @click="handleAddCart">加入购物车</li>
                <li>立即购买</li>
            </ul>
        </footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';
import { Toast } from 'vant';
Vue.use(AddressEdit);


export default {
    props:["goods"],
    data() {
        return {
        //   areaList,
        //   searchResult: [],
        };
    },
    methods: {
        onSave() {
        Toast('save');
        },
        onDelete() {
        Toast('delete');
        },
        onChangeDetail(val) {
        //   if (val) {
        //     this.searchResult = [
        //       {
        //         name: '黄龙万科中心',
        //         address: '杭州市西湖区',
        //       },
        //     ];
        //   } else {
        //     this.searchResult = [];
        //   }
        },
        handleClick(){
            this.$router.push("/variety")
        },
        handleAddCart(){
            this.$router.push("/shopbagdialog")
        }
    },
    mounted(){
        console.log(this.goods)
    }
};
</script>

<style scoped lang="stylus">
.contain 
    width 3.75rem
    height 100%
    display flex
    flex-direction column
    position relative
    header 
        height 0.44rem
        background #ffffff
        text-align center
        line-height 0.44rem
        font-size 0.16rem
        font-weight bold
        color #000
        position relative
        div
            position absolute 
            left 0.22rem
            top 0.03rem
    .swiper
        height 3.75rem
        background-color pink
    main 
        flex 1
        background-color #f6f6f6
        .detail
            margin-bottom .1rem
            padding 0 .18rem  0.1rem
            background-color #fff
            li 
                display flex
            li:first-child 
                height 0.7rem
                line-height 0.7rem
                display flex
                justify-content space-between
                span:first-child 
                    color #d7aa6f
                    font-size 0.18rem
                span:last-child 
                    color #989898
                    font-size 0.1rem
            li:nth-child(2) 
                color #2f2f2f
                font-size .16rem
                line-height 0.34rem
                padding 0 0.06rem
            li:last-child 
                color #929292
                font-size .12rem
        .expressInfo
            margin-bottom .1rem
            padding 0 .18rem 
            background-color #fff
            .brand 
                display flex
                height 0.44rem
                line-height 0.44rem
                font-size 0.14rem
                span:first-child
                    color: #848484
                    padding-right 0.4rem 
        .detailImg 
            .title
                font-size 0.16rem
                color #848484
                height 0.4rem
                line-height 0.4rem
                text-align center
                background-color #fff
            div 
                p
                    img 
                        max-width 100%
                        height auto
                        display block

            
    footer
        width 100%
        height .5rem
        line-height .5rem
        display flex
        position fixed 
        bottom 0
        justify-content space-between
        padding 0 0.1rem 0 0.2rem
        background-color #fff
        div 
            display flex
            margin-right .2rem
            p 
                display flex
                flex-direction column
                align-items center
                margin-right 0.2rem
                padding-top 0.08rem
                i   
                    font-size 0.24rem
                    line-height 0.2rem
                span 
                    color #565656
                    line-height 0.2rem
                    font-size 0.13rem
        ul 
            display flex
            align-items center
            color #fff
            li 
                width 1.1rem
                height 0.4rem
                line-height 0.4rem
                text-align center
                border-radius 0.05rem
            li:first-child
                background-color #373536
                margin-right 0.08rem
            li:nth-child(2)
                background-color #ceac6c

</style>
<style lang="css">
.expressInfo .van-address-edit{
    padding: 0;
}
.expressInfo .van-address-edit .van-address-edit__buttons{
       display: none;
}
.van-address-edit__fields .van-cell {
        display:none;
}       
.van-address-edit__fields .van-cell--clickable{
    display:flex
}
</style>

