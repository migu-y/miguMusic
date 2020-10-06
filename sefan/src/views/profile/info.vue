<template>
  <div>
    <header>
      <van-nav-bar
        title="编辑个人资料"
        left-arrow
        @click-left="onClickLeft"
        placeholder
      />
    </header>
    <div class="mian">
      <div class="avatar">
        <img src="../../../public/images/avatar.png" alt="" />
      </div>
      <div class="form">
        <van-field label="昵称" value="大花生" size="large" readonly />
        <van-field label="手机" value="178****9320" size="large" readonly />
        <van-field name="radio" label="单选框" size="large">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1" checked-color="#000">男</van-radio>
              <van-radio name="2" checked-color="#000">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-form @submit="onSubmit">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="value"
            label="生日"
            placeholder="生日"
            @click="showPicker = true"
            size="large"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
          
        </van-form>
      </div>
    </div>
  </div>
</template>
 
 
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Form } from "vant";
import { Field } from "vant";
import { RadioGroup, Radio } from "vant";
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { Button } from "vant";

Vue.use(Button);
Vue.use(Popup);
Vue.use(DatetimePicker);

Vue.use(Radio);
Vue.use(RadioGroup);

Vue.use(Field);
Vue.use(Form);
Vue.use(NavBar);

export default {
  data() {
    return {
      radio: "1",
      value: "",
      showPicker: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onConfirm(date) {
      this.value = date;
      this.showPicker = false;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
 
 
<style lang="stylus" scoped>
.mian {
  width: 100%;
  min-height: 6rem;
  background-color: #f8f8f8;
}

.avatar {
  width: 100%;
  height: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}

.avatar>img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.6rem;
  position: absolute;
  top: 0.3rem;
  left: 50%;
  transform: translate(-50%, 0);
}

.form {
  width: 100%;
  background-color: #fff;
  margin-top: 0.08rem;
}

</style>