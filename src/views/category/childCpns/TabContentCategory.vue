<template>
  <div class="sub-categories">
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
      <div class="list-item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
  import GridView from '@/components/common/gridView/GridView'

  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    props: {
      subcategories: null
    }
  }
</script>
 
<style scoped>
  .list-item {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .list-item img {
    width: 80%;
  }
  .item-text {
    font-size: 13.5px;
    margin-top: 15px;
  }
</style>