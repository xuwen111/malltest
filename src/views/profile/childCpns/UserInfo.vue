<template>
  <div class="user-info">
    <div class="image">
      <img src="@/assets/img/other/defaultportrait.png" alt="">
    </div>
    <div class="login-info">
      <div class="login">登录 / 注册</div>
      <div class="bind-phone">
        <img src="@/assets/img/other/phone.png" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="to-right">
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
}
</script>

<style scoped>
  .user-info {
    height: 100px;
    background-color: var(--color-tint);
    display: flex;
    color: #fff;
    font-size: 13px;
    border-top: solid 1px rgb(204, 47, 112, .1);
  }
  .image {
    width: 25%;
    margin: auto 10px auto 0;
    padding-left: 10px;
  }
  .image img {
    width: 80%;
    border: solid 1px #fff;
    border-radius: 50%;
  }
  .login-info {
    width: 50%;
    margin: auto 0;
  }
  .bind-phone {
    width: 100%;
  }
  .bind-phone img {
    width: 13%;
  }
  .login-info .login {
    font-size: 17px;
    margin-bottom: 5px;
  }
  .to-right {
    margin: auto 0 auto 45px;
    font-size: 26px;
    font-weight: 700;
  }

</style>