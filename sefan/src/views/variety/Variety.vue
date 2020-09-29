<template>
  <div class="cotain">
      <router-view></router-view>
    <div>
      <router-link tag="li" active-class="active" to="/variety/heytealabor">
          <span>喜茶实验室</span>
      </router-link>
      <router-link tag="li" active-class="active" to="/variety/factory">
          <span>喜小茶瓶装厂</span>
      </router-link>
    </div>
  </div>

</template>

<script>

export default {
  
};
</script>

<style scoped lang="stylus">
.container {
  width: 100%;
}
</style>