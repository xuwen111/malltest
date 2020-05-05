import {debounce} from './utils'
import TopBack from '@/components/content/TopBack'

export const itemImageListenerMixin = {
  data(){
    return {
      itemImageListener: null,
    }
  },
  mounted(){
    //监听item中图片加载
    const fresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImageListener = () => {
      fresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  }
}

export const backTopMixin = {
  components: {
    TopBack
  },
  data(){
    return {
      showBack: false
    }
  },
  methods: {
    //2.2回到顶部事件点击
    backClick(){
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)   
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}