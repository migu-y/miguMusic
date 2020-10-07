<template>
  <div id="all">
    <main>
      <div class="cover">
        <div class="profile">
          <p>吃瓜啵？大花生</p>
          <p>吸葡萄不吐葡萄皮</p>
          <p>
            <span class="GO">GO会员</span>
            <span class="BVIP">成为星球会员享双倍积分></span>
          </p>
          <p>Lv1</p>
          <div class="avatar"></div>
          <div class="integration">
            <img class="jifen" src="../../../public/images/1.jpg" alt="" />
            <img class="jifen" src="../../../public/images/2.jpg" alt="" />
            <img class="jifen" src="../../../public/images/3.jpg" alt="" />
            <img class="jifen" src="../../../public/images/4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="broadcast">
        <p class="plant">星球播报</p>
        <div class="carousel">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <div class="contents">
                <div class="icons">
                  <img
                    src="https://go.cdn.heytea.com/storage/products/2020/09/21/92e9e217c8614ac3b257fec0dbcdbbde.jpeg"
                    alt=""
                  />
                </div>
                <p class="tittle">流心奶黄波波冰</p>
                <p class="subtittle">满载礼物回归</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="contents">
                <div class="icons">
                  <img
                    src="https://go.cdn.heytea.com/storage/products/2020/09/15/990e026a40274ab5a9242169519aa7f8.jpeg"
                    alt=""
                  />
                </div>
                <p class="tittle">椰椰新成员登场</p>
                <p class="subtittle">椰椰脆筒&椰椰冻雪糕杯来啦</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="contents">
                <div class="icons">
                  <img
                    src="https://go.cdn.heytea.com/storage/products/2020/09/15/963e94eddddc486090345e2391d430ce.png"
                    alt=""
                  />
                </div>
                <p class="tittle">喜茶饼家中秋礼盒正式发售</p>
                <p class="subtittle">现货礼盒最低8折购</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="contents">
                <div class="icons">
                  <img
                    src="https://go.cdn.heytea.com/storage/products/2020/09/09/4975937b7d504be88d2a63a9dc8d5edf.jpeg"
                    alt=""
                  />
                </div>
                <p class="tittle">别点开，会饿的</p>
                <p class="subtittle">多肉瓜瓜冻回归~</p>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="contents">
                <div class="icons">
                  <img
                    src="https://go.cdn.heytea.com/storage/products/2020/05/08/0a11147144ff42629e6eca9eeec53215.png"
                    alt=""
                  />
                </div>
                <p class="tittle">喜茶星球会员升级啦</p>
                <p class="subtittle">点击了解升级详情</p>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="mession"></div>
      <div class="gift"></div>
      <div class="router">
        <van-cell title="会员码" value="门店扫码积分" size="large" is-link/>
        <van-cell title="兑换中心" value="兑换星球会员" size="large" is-link/>
        <van-cell title="星球会员" size="large" is-link/>
        <van-cell title="联系客服" size="large" is-link/>
        <van-cell title="消息中心" size="large" is-link/>
        <van-cell title="更多" size="large" is-link/>
      </div>
    </main>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Grid, GridItem } from "vant";
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
import mock from "../../mock/mock.js";
var { profileCarousel } = mock();
export default {};
</script>
 
 
<style lang="stylus" scoped>
#all {
  background-color: #f8f8f8;
  width: 100%;
}

header {
  height: 0.44rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  z-index: 999;
  position: fixed;
  justify-content: center;
  align-items: center;

  >p {
    font-size: 0.18rem;
    color: #000;
    font-weight: 500;
  }
}

.cover {
  width: 100%;
  height: 3.62rem;
  background-image: url('https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png'); // go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png)
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  position: relative;

  >.profile {
    width: 3.44rem;
    height: 2.13rem;
    border-radius: 0.05rem;
    display: block;
    position: absolute;
    background-color: #fff;
    bottom: -1.41rem;

    >p:nth-child(1) {
      font-size: 0.18rem;
      margin: 0;
    }

    >p:nth-child(3) {
      padding-top: 0.08rem;
      padding-left: 0.12rem;

      .GO {
        font-size: 0.22rem;
      }

      .BVIP {
        display: inline-block;
        height: 0.2rem;
        width: content;
        background-color: #eee;
        border-radius: 0.15rem;
        font-size: 0.12rem;
      }
    }

    .avatar {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
      display: block;
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      background-image: url('../../../public/images/avatar.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    >p:nth-child(4) {
      margin-left: 0.12rem;
      width: 0.4rem;
      height: 0.18rem;
      border-radius: 0.05rem;
      border: 1px solid #000;
      font-weight: 500;
      text-align: center;
      line-height: 0.18rem;
    }

    .integration {
      width: 3.4rem;
      height: 0.95rem;
      border-top: 1px solid #eee;
      margin: 0.05rem auto 0;

      .jifen {
        width: 0.85rem;
        height: 0.95rem;
        display: inline-block;
      }
    }
  }
}

.broadcast {
  width: 3.44rem;
  height: 1.6rem;
  margin: 1.65rem auto 0.2rem;

  .plant {
    font-size: 0.16rem;
  }

  .carousel {
    width: 100%;
    height: 1.35rem;

    .my-swipe .van-swipe-item {
      color: #000;
      width: 100%;
      height: 1.3rem;
      border-radius: 0.1rem;
      background-color: #fff;
    }

    .contents {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .icons>img {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      display: block;
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
    }

    .tittle {
      height: 0.24rem;
      width: 100%;
      display: block;
      font-size: 0.16rem;
      line-height: 0.24rem;
      position: absolute;
      top: 0.35rem;
      left: 1rem;
    }

    .subtittle {
      height: 0.2rem;
      width: 100%;
      display: block;
      font-size: 0.12rem;
      line-height: 0.2rem;
      position: absolute;
      top: 0.6rem;
      left: 1rem;
    }
  }
}

.mession {
  width: 3.44rem;
  height: 1.3rem;
  display: block;
  margin 0 auto;
  border-radius .1rem
  background-image url("../../../public/images/mession.png")
  background-size 100% 100%
  background-repeat no-repeat
}
.gift{
  width: 100%;
  height: 2rem;
  display: block;
  margin .2rem auto;
  background-image url("../../../public/images/gift.jpg")
  background-size 100% 100%
  background-repeat no-repeat
}
.router{
  width: 100%;
  height: 3.4rem;
  display: block;
}
</style>