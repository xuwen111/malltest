<template>
  <div class="other-info">
    <div class="part1">
      <div class="message item">
        <img src="@/assets/img/other/mymessage.png" alt="">
        我的消息
      </div>
      <div class="score item">
        <img src="@/assets/img/other/myscore.png" alt="">
        积分商城
      </div>
      <div class="vip item">
        <img src="@/assets/img/other/myvip.png" alt="">
        会员卡
      </div>
    </div>

    <div class="part2">
      <div class="cart item">
        <img src="@/assets/img/other/mycart.png" alt="">
        我的购物车
      </div>
      <div class="load item">
        <img src="@/assets/img/other/myload.png" alt="">
        下载购物APP
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherInfo',
}
</script>

<style scoped>
  .other-info img {
    width: 5%;
    margin: 0 10px;
  }
  .other-info .item {
    display: flex;
    height: 50px;
    border-bottom: solid 2px #eee;
    align-items: center;
  }
  /* .other-info .load {
    border-bottom: 0px;
  } */
  .part1 {
    border-bottom: solid 10px #eee;
  }
</style>