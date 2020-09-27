<template>
  <div class="container">
      <header>喜小茶零糖气泡水</header>
      <main>
         <div class="banner">
             <img src="" alt="">
         </div>

          <ul>
              <li>
                  <div>
                      <img src="" alt="">
                  </div>
                  <div>
                      <p>【混合装】喜小茶零糖气泡水</p>
                      <p>规格为12瓶一箱哦</p>
                      <span>￥66.00</span>
                      <div>立即购买</div>
                  </div>
              </li>
          </ul>
      </main>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.container
    height 100%
    display flex
    flex-direction column
    header 
        height .44rem
        background  transparent  //背景色透明
        text-align center        //居中对齐
        line-height .44rem       //行高
        font-size   .16rem       //文字大小
        //font-weight bold         //文字加粗
        color  #000
    main
        flex 1
        background #eee
        overflow-y: scroll
        li
            display flex
            flex-direction column
            div:nth-child(2)
                p:nth-of-type(1)
                    font-size .16rem
                    font-weight bold
                p:nth-of-type(2)
                    font-size .12rem
                    color #666
                span 
                    font-size .14rem
                    font-weight  bold



        .banner 
             height .250rem
    

</style>