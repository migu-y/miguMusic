<template>
  <div class="container">
    <header>
      <div class="talk"><i class="iconfont icon-shuqian"></i> 想对你说</div>
    </header>
    <nav>
      <ul class="orderNav">
        <li>当前订单</li>
        <li>历史订单</li>
      </ul>
    </nav>
    <section class="main">

    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
.container 
  height 100%
  display flex
  header 
    height 0.6rem
    display flex
    align-items center
    padding 0 0.2rem
    .talk
      font-size 0.16rem
      color #666
      width 1rem
      height 0.4rem
      line-height 0.4rem
      text-align center
      border-radius 0.2rem
      border 1px solid #ccc
  nav 
    padding-top 0.2rem 
    
    .orderNav
        display flex
        justify-content space-around
        font-size 0.16rem
        li 
            padding-bottom 0.1rem
        li:first-child
            border_1px(0 0 3px 0)
            border-bottom-color #000
  section.main 
    flex 1
    background-color yellow 
    border-top 1px solid #cccccc
</style>