<template>
  <div>
    <tab-bar>

      <tab-bar-item path='/home' activeColor='pink'>
        <img slot='item_icon' src="@/assets/img/tabbar/home.png" alt="">
        <img slot='active_item_icon' src="@/assets/img/tabbar/home_active.png" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='pink'>
        <img slot='item_icon' src="@/assets/img/tabbar/category.png" alt="">
        <img slot='active_item_icon' src="@/assets/img/tabbar/category_active.png" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='pink'>
        <img slot='item_icon' src="@/assets/img/tabbar/cart.png" alt="">
        <img slot='active_item_icon' src="@/assets/img/tabbar/cart_active.png" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='pink'>
        <img slot='item_icon' src="@/assets/img/tabbar/profile.png" alt="">
        <img slot='active_item_icon' src="@/assets/img/tabbar/profile_active.png" alt="">
        <div slot="item_text">我的</div>
      </tab-bar-item>
  
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>