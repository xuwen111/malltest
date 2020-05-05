<template>
  <div class="bottom-bar">
    <div class="left-bar">
      <div>
        <img src="@/assets/img/detail/kefu.png" alt="">
        <div class="text">客服</div>
      </div>
      <div>
        <img src="@/assets/img/detail/shop.png" alt="">
        <div class="text">店铺</div>
      </div>
      <div>
        <img src="@/assets/img/detail/like.png" alt="">
        <div class="text">收藏</div>
      </div>
    </div>

    <div class="right-bar">
      <div class="join" @click="addTo">加入购物车</div>
      <div class="buy">去购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addTo(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    width: 100vw;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;

    height: 49px;
    background-color: #fff;
    font-weight: 600;
    box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, .05);

    z-index: 99;
  }

  .left-bar {
    flex: 1;
    display: flex;
  }

  .right-bar {
    flex: 1;
    display: flex;
    font-size: 14px;
    text-align: center;
    line-height: 49px;
    color: #666;
  }

  .left-bar div {
    flex: 1;
    width: 100%;
  }

  .left-bar .text {
    font-size: 13.5px;
    text-align: center;
  }

  .left-bar div img {
    margin: 3px 0 3px 15px;
    width: 23px;
    height: 20px;
  }

  .right-bar .join {
    width: 60%;
    background-color: yellow;
  }

  .right-bar .buy {
    width: 40%;
    background-color: var(--color-tint);
  }
</style>