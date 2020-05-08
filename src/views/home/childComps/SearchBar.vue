<template>
  <div class="content">
    <form action="http://www.baidu.com">
      <img src="@/assets/img/search.png" alt="">
      <input type="search" id="text" placeholder=" 2020新款女装">
      <button type="submit" class="search-btn">搜索</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
  .content {
    background-color: var(--color-tint);
    display: flex;
    align-items: center;
  }
  .content img {
    margin-left: 10px;
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
  #text {
    margin-top: 5px;
    width: 260px;
    box-shadow: none;
    border: solid 1px #ccc;
    border-radius: 8px;
  }
  .content button {
    margin-left: 8px;
    padding: 0 5px;
    background: #fff;
    border: solid 1px #ccc;
    border-radius: 5px;
    color: #999;
  }
</style>