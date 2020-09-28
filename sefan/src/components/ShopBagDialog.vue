<template>
    <div class="wrap">
        <ul class="detail">
            <li class="itemImg">
                <img src="@a/item.jpg" alt="">
            </li>
            <li>
                <ul>
                    <li>【葡萄味】喜小茶零糖气泡水 单口味12瓶/箱</li>
                    <li>规格为12瓶一箱哦~</li>
                    <li>¥ 66.00</li>
                </ul>
            </li>
            <i class="iconfont icon-roundclosefill"></i>
        </ul>
        <div class="count">
            <p>口味</p>
            <p>葡萄味 (410ml*12瓶)</p>
        </div>
        <div class="step">
            <span>购买数量</span>
            <span>
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
            </span>
        </div>
        <p class="confirm">确定</p>
    </div>
   
</template>

<script>
import Vue from 'vue';
import { Stepper } from 'vant';

Vue.use(Stepper);

export default {
 data() {
    return {
      value: 1,
    };
  },
}
</script>


<style scoped lang="stylus">
.wrap      
    width 5rem
    height 6.9rem
    border-radius 0.2rem
    background-color #fff
    padding-left 0.3rem
    padding-right 0.3rem
    .detail 
        display flex
        position relative
        height 1.9rem
        padding 0.22rem 0
        .itemImg 
            width 1.14rem
            height 1.4rem
            margin-right 0.32rem
            img 
                width 100%
                height 100%
        li:nth-child(2)
            flex 1
            ul 
                width 100%
                li:first-child 
                    width 2rem
                    font-size 0.18rem
                    font-weight bold
                    color #343434
                    line-height 0.32rem
                    padding-right 0.3rem
                li:nth-child(2)
                    font-size 0.16rem
                    color #999999
                    padding 0.04rem 0
                li:last-child 
                    font-size 0.2rem
                    font-weight bold
                    color #cfaa79
        i
            position absolute 
            top 0.1rem
            right 1rem
            color #c0c0c0
            font-size 0.3rem
    .count 
        height 1.5rem
        padding 0.18rem 0 0 0
        p:first-child 
            color #898989
            font-size 0.15rem
            padding-bottom 0.18rem
        p:nth-child(2)
            width 2.44rem
            height 0.44rem
            line-height 0.44rem
            text-align center
            color #fff
            border-radius 0.1rem
            background-color #cfaa79
    .step
        height 0.36rem
        line-height 0.36rem
        display flex
        padding-bottom  1.6rem
        span 
            height 0.36rem
            line-height 0.36rem
        span:first-child 
            color #898989
            font-size 0.16rem
            padding-right 1.45rem
    .confirm
        width 3rem
        height 0.6rem
        color #ffffff
        line-height 0.6rem
        text-align center
        background-color #cfaa79
        border-radius 0.06rem
</style>
<style lang="css">
.van-stepper--round .van-stepper__plus {
    color: #fff;
    background-color: #cfaa79;
}
.van-stepper--round .van-stepper__minus {
    color: #c2c2c2;
    background-color: #fff;
    border: 1px solid #c2c2c2;
}

</style>
