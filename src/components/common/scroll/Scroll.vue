<template>
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      scroll: ''
    }
  },
  mounted(){
    setTimeout(this.initScroll(), 1000);
  },
  methods: {
    //1初始化initScroll函数
    initScroll(){
      //1.1实例化BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      // console.log(this.scroll);
      
      //1.2监听实时滚动
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          // this.scroll.hasVerticalScroll = true
          this.$emit('scroll', position)
        })
      }
      //1.3监听上拉加载
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
          //每次执行完pullingUp后，需要finish当前次pullingUp
          this.scroll && this.scroll.finishPullUp()
        })
      }
    },

    //2.scrollTo函数
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },

    //3.refresh函数
    refresh(){
      this.scroll && this.scroll.refresh()  
    }
  },
  watch: {
    data(){
      setTimeout(() => {
      
      }, 20)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }
</style>