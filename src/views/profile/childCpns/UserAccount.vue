<template>
  <div class="account">
    <div class="money">
      <div class="num"><span>0.00</span>元</div>
      我的余额
    </div>
    <div class="coupon">
      <div class="num"><span>0</span>个</div>
      我的优惠券
    </div>
    <div class="score">
      <div class="num"><span>0</span>分</div>
      我的积分
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAccount'
}
</script>

<style scoped>
  .account {
    width: 100%;
    height: 90px;
    display: flex;
    font-size: 14px;
    text-align: center;
    border-bottom: solid 10px #eee;
  }
  .money,
  .coupon,
  .score {
    flex: 1;
    margin: auto 0;
  }
  .num {
    margin-bottom: 5px;
  }
  .num span {
    margin-right: 3px;
    color: var(--color-tint);
    font-size: 16px;
    font-weight: 600;
  }
  .money,
  .coupon {
    border-right: solid 2px #eee;
  }
</style>