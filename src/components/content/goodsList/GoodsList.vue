<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods-list {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
</style>