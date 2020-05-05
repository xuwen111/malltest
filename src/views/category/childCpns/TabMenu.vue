<template>
  <scroll id="menu-content" :data="categories">
      <div class="menu">
        <div class="menu-item" 
             v-for="(item, index) in categories" :key="index"
             @click="itemClick(index)"
             :class="{active: index === currentIndex}">
          {{item.title}}
        </div>
      </div>
    </scroll>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'

	export default {
    name: "TabMenu",
    props: {
      categories: {}
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
	}
</script>

<style scoped>
  #menu-content {
    height: 100%;
    overflow: hidden;
    background-color: #efefef;
  }

  .menu {
    font-size: 15px;
    text-align: center;
  }

  .menu-item {
    padding: 10px 0;
  }

  .menu-item.active {
    background-color: #fff;
    color: var(--color-tint);
    font-size: 16px;
    font-weight: 600;
    border-left: solid 2px var(--color-high-text);
  }
</style>