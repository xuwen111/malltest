<template>
  <div class="tab-control">
    <div class="tab-control-item" 
         v-for="(item, index) in title" :key="index"
         @click="changeIndex(index)"
         :class="{show: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex(index){
      this.currentIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style>
  .tab-control  {
    width: 100%;
    padding-top: 10px;
    display: flex;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text);
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item span {
    padding: 3px;
  }

  .show span {
    color: var(--color-high-text);
    border-bottom: solid 2px var(--color-high-text);
  }
</style>