<template>
  <div class='nav-bar'>
    <div class='left'><slot name='left'></slot></div>
    <div class='center'><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .nav-bar {
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 1px 0 1px 1px rgba(0,0,0,0.1);

  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>