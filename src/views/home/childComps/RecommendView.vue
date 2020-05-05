<template>
  <div class="recommend-view">
    <div class="recommend-view-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend-view {
    padding: 10px 0 20px 0;
    width: 100vw;
    display: flex;
    text-align: center;
    border-bottom: solid 8px #ddd;
  }

  .recommend-view-item {
    flex: 1;
  }

  .recommend-view-item img {
    /* width: 23%; */
    width: 95%;
    margin-bottom: 7px;
  }
</style>>
