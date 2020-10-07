<template>
  <div id="all">
    <header>
      <van-nav-bar
        title="任务中心"
        left-arrow
        @click-left="onClickLeft"
        placeholder
      />
    </header>
    <div class="mian">
      <div class="grade">
        <img src="https://go.cdn.heytea.com/storage/products/2019/12/18/b3d3a98e3c7f450aaa32fbec6aecdfaf.png" alt=""/>
        <p class="p1">当前等级</p>
        <p class="p2">Lv1</p>
        <p class="p3">经验值：0/299</p>
        <p class="p4">当前积分：1></p>
      </div>
      <div class="mession1">
        <p>周期任务</p>
        <li>
          <p>每日签到</p>
          <p>积分+1</p>
          <span>签到</span>
        </li>
        <li>
          <p>每周线上消费三次（0/3）</p>
          <p>积分+10</p>
          <span>去完成</span>
        </li>
        <li>
          <p>每周消费喜茶实验室1次</p>
          <p>积分+15</p>
          <span>去完成</span>
        </li>
      </div>
      <div class="mession2">
        <p>成长任务</p>
        <li>
          <p>完善个人资料</p>
          <p>积分+10</p>
          <span>去完成</span>
        </li>
        <li>
          <p>首次成为星球会员</p>
          <p>积分+50</p>
          <span>去完成</span>
        </li>
        <li>
          <p>累计消费10次（0/10）</p>
          <p>积分+25</p>
          <span>去完成</span>
        </li>
        <li>
          <p>累计消费30次（0/30）</p>
          <p>积分+30</p>
          <span>去完成</span>
        </li>
        <li>
          <p>累计消费60次（0/60）</p>
          <p>积分+40</p>
          <span>去完成</span>
        </li>
      </div>
    </div>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Toast } from "vant";

Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
  },
};
</script>
 
 
<style lang="stylus" scoped>
#all {
  background-color: #f8f8f8;
  width: 100%;
  min-height: 6rem;
}

.grade {
  width: 100%;
  height: 1.8rem;
  background-color: #fff;
  position: relative;
}

.grade>img {
  display: block;
  position: absolute;
  right: 0.5rem;
  top: 0.1rem;
  width: 1.3rem;
}
.p1{
  display block
  font-size .12rem
  padding-left .2rem
  padding-top .2rem
}
.p2{
  display block
  font-size .22rem
  padding-left .2rem
}
.p3{
  display block
  font-size .16rem
  padding-left .2rem
  padding-top .2rem
}
.p4{
  display block
  font-size .16rem
  padding-left .2rem
}
.mession1{
  width 100%
  height 3rem 
  background-color #fff
  margin-top .1rem
  padding-top .15rem
  padding-left .15rem
}
.mession1>p{
  font-size .18rem
}
.mession1>li{
  display block
  width 100%
  height .8rem
  position relative
  padding-top .15rem 
  padding-bottom .15rem
  border-bottom 1px solid #f8f8f8
}
.mession1>li>span{
  display block
  position absolute
  width .6rem
  height .3rem
  border-radius .15rem
  background-color #eee
  top .25rem
  right .3rem
  line-height .3rem
  text-align center
}
.mession2{
  width 100%
  min-height 5rem 
  background-color #fff
  margin-top .1rem
  padding-top .15rem
  padding-left .15rem
}
.mession2>p{
  font-size .18rem
}
.mession2>li{
  display block
  width 100%
  height .8rem
  position relative
  padding-top .15rem 
  padding-bottom .15rem
  border-bottom 1px solid #f8f8f8
}
.mession2>li>span{
  display block
  position absolute
  width .6rem
  height .3rem
  border-radius .15rem
  background-color #eee
  top .25rem
  right .3rem
  line-height .3rem
  text-align center
}
</style>