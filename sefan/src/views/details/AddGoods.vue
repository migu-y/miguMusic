<template>
    <div class="con">
        <div class="info">
            <img :src="showInfo" alt="">
            <div>
                <h2>{{data.wxItem.name}}</h2>
                <h3>{{data.wxItem.subName}}</h3>
                <p>￥{{showPrice | price}}</p>
            </div>
        </div>
        <div class="main">
            <div class="sorts">
                <h4 v-for='(item,i) in infoImg' :key="i">
                    {{item.keyName}}
                    <p>
                        <b v-for="(sort,j) in item.treeValList" :key="j" @click="changePrice(j)" :class='active === j ? "check" : "" '>
                            {{sort.valName}}
                        </b>
                    </p>
                </h4>
            </div>
            <div class="num">
                <p>购买数量</p>
                <van-stepper v-model="value" theme="round" button-size="24" input-width="26" disable-input />
            </div>
        </div>
        <div class="confirm">
            <div class="button" color="rgb(219,168,113)" @click="addToCart(data.wxItem)">确定</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Stepper, Button } from 'vant';
    import {mapState,mapActions} from "vuex"

    Vue.use(Stepper);
    Vue.use(Button);
    export default {
        props:['data'],
        data(){
            return {
                active:0,
                infoImg:[],
                infoPrice:[],
                showInfo:{},
                showPrice:0,
                value: 1,
            }
        },
        methods:{
            changePrice(j){
                // console.log(e.target);
                // e.target.backgroundColor='rgb(215,168,113)'
                // e.target.fontSize='.2rem'
                // e.target.color='#000'
                this.active=j
                this.showInfo=this.infoImg[0].treeValList[this.active].imageUrl
                this.showPrice=this.infoPrice[this.active].salePrice
            },
            ...mapActions("cart",["addToCart"]),
            
        },
        mounted(){
            this.infoImg=this.data.skuTreeList;
            this.infoPrice=this.data.skuInfoList;
            this.showInfo=this.infoImg[0].treeValList[this.active].imageUrl
            this.showPrice=this.infoPrice[this.active].salePrice
            console.log(this.data);
        },
        filters:{
            price(value){
                return value.toString().slice(0,-2) + ".00"
            }
        }
    }
</script>

<style lang="stylus" scoped>

.con
    width 3.5rem
    height 5rem
    padding .3rem
    display flex
    flex-direction column
    .info
        display flex
        margin-bottom .2rem
        img
            width 33%
        h2
            font-size .16rem
        h3
            font-size .13rem
            color rgb(153,153,153)
            font-weight normal
            margin-bottom .1rem
        p
            font-size .18rem
            font-weight bold
            color rgb(215,168,113)
    .main
        flex 1
        overflow-y scroll
        .sorts
            h4
                font-weight normal
                color rgb(137,137,137)
                margin-bottom .3rem
                p
                    display flex
                    flex-direction column
                    padding-top .05rem
                    b
                        width 1.4rem
                        height .3rem
                        font-size .14rem
                        // padding 0.08rem 0.1rem
                        font-weight normal
                        // padding 0.06rem 0.02rem
                        background-color rgb(245,245,247)
                        color #000
                        line-height .3rem
                        text-align center
                        border-radius .08rem
                        margin-bottom .14rem
        .num
            display flex
            justify-content space-between
            margin-bottom .4rem
    // .confirm

        
.check
    background-color rgb(215,168,113)!important
    color #fff!important
.button 
    background-color rgb(215,168,113)
    border-radius .1rem
    height .35rem
    line-height .35rem
    text-align center
</style>

<style lang="stylus">
.van-stepper__plus
    background-color rgb(219,168,113)!important
</style>