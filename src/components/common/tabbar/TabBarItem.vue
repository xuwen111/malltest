<template>
  <div class='tab-bar-item' @click='change()'>
    <div v-if='!isactive'><slot name='item_icon'></slot></div>
    <div v-else><slot name='active_item_icon'></slot></div>
    <div :style='activeStyle'><slot name='item_text'></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    // data(){
    //   return {
    //     isactive: true
    //   }
    // },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods:{
      change(){
        this.$router.push(this.path)
      }
    },
    computed: {
      isactive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isactive ? {color: this.activeColor} :{}
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 26px;
    height: 26px;
    vertical-align: middle;
    /* margin-top: 2px; */
    margin-bottom: 2px;
  }
</style>