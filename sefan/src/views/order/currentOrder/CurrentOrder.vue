<template>
    <div class="orderContainer">
        <div class="logo">
            <img src="@a/timg.gif" alt="">
        </div>
        <div class="desc">
            <span>您今天还没有下单</span>
            <span>快去选择一杯喜欢的茶吧</span>
        </div>
        <div class="order">
            <p @click="handleClickOrder">去点单</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        handleClickOrder(){
            this.$router.push("/reservation")
        }
    }
}
</script>

<style lang="stylus" scoped>
.orderContainer
    width 100%
    height 100%
    display flex
    flex-direction column
    .logo
        img 
            width 100%
    .desc 
        height 1.12rem
        display flex
        flex-direction column
        align-items center 
        font-size 0.18rem
        color #898989
    .order
        width 100%
        p 
            width 2.7rem
            height 0.6rem
            line-height 0.6rem
            text-align center
            color #fff
            background-color #d3aa79
            border-radius 0.1rem
            margin 0 auto
</style>