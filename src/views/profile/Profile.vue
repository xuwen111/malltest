<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <user-info />
    <user-account />
    <other-info />

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import UserInfo from './childCpns/UserInfo'
import UserAccount from './childCpns/UserAccount'
import OtherInfo from './childCpns/OtherInfo'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    UserAccount,
    OtherInfo
  }
}
</script>

<style scoped>
  #profile {
    height: 100vh;
    width: 100vw;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    z-index: 9;
  }
</style>