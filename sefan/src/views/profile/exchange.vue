<template>
  <div>
    <header>
      <van-nav-bar
        title="兑换中心"
        left-arrow
        @click-left="onClickLeft"
        placeholder
      />
    </header>
    <div class="mian">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
    </div>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { CouponCell, CouponList } from "vant";
import { NavBar } from "vant";
import { Toast } from "vant";
Vue.use(NavBar);

Vue.use(CouponCell);
Vue.use(CouponList);
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onClickLeft() {
      this.$router.back()
    },
  },
};
</script>
 
 
<style lang="stylus" scoped></style>