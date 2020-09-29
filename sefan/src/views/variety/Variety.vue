<template>
  <div class="cotainer">
      <router-view></router-view>
      <div>
          <router-link tag="li" active-class="active" to="/variety/heytealabor">
            <span>喜茶实验室</span>
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