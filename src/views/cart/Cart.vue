<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center">我的购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list/>
    <cart-side-bar />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import CartList from './childCpns/CartList'
import CartSideBar from './childCpns/CartSideBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartSideBar,
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart .nav {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
</style>