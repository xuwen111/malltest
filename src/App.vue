<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainTabBar from './components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      mainTabBar
    }
  }
</script>

<style>
  @import 'assets/css/main.css';

  .tab-bar {
    font-size: 12px;
    background-color: #f9f9f9;
    z-index: 10;
  }
</style>
