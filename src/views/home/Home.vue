<template>
  <div id="home">
    <nav-bar class='home-navbar'>
      <div slot='center'>购物街</div>
    </nav-bar>
    <tab-control @change="changeType" 
                   :title= "['流行','新款','精选']"
                   ref="tabControl1" class="tab-control-n"
                   v-show="showTabControl"/>
    <scroll class="content1" ref="scroll" 
            :probeType="3" @scroll="scrollListen"
            :pullUpLoad="true" @pullingUp="loadMore"
            :data="showGoodsList">
      <home-swiper :swiper-list="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control @change="changeType" 
                   :title= "['流行','新款','精选']"
                   ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list" ref="goodsList"/>
    </scroll>
    <top-back v-show="showBack" @click.native="backClick"/>

  </div>
</template> 

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import HomeSwiper from '@/components/common/swiper/MySwiper'
import TabControl from '@/components/content/TabControl'
import GoodsList from '@/components/content/goodsList/GoodsList'
// import TopBack from '@/components/content/TopBack'

import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
import { debounce } from '@/common/utils'
import { backTopMixin } from '@/common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    TabControl,
    RecommendView,
    FeatureView,
    GoodsList,
    // TopBack,
  },
  mixins: [backTopMixin],
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      // showBack: false,
      tabControlOffsetTop: 0,
      showTabControl: false,
      saveY: 0,
      goodsListOffsetHeight: 0,
      itemImageListener: null,
    }
  },
  // mixins: [itemImageListenerMixin],

  // 在组件创建时就发送网络请求
  created(){
    //1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    let current = this
    setTimeout(() => {
      current.$nextTick(() => {
        current.$refs.scroll.refresh()
      })
    }, 1000);
  },
  computed: {
		showGoodsList() {
		  return this.goods[this.currentType].list
    }
  },
  mounted(){

    //监听item中图片加载
    const fresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImageListener = () => {
      fresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  },
  activated(){
    //回到home页时设置位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated(){
    //1.离开home页时保存位置
    this.saveY = this.$refs.scroll.scroll.y

    //2.取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },

  methods: {
    //1.网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res => {  
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page ++
      })
    },

  //2.事件监听相关
    //2.1点击tabControl切换
    changeType(index){
      switch(index){
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      } 
      //保证两个tabControl状态同步
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      //如果tabControl已经“吸顶”，点击切换商品类型时goodsList需要回到顶部显示
      if(this.showTabControl){
        this.$refs.scroll.scrollTo(0, -this.goodsListOffsetTop, 0)
      }
    },
    // //2.2回到顶部事件点击
    // backClick(){
    //   // this.$refs.scroll.scroll.scrollTo(0, 0, 500)   
    //   this.$refs.scroll.scrollTo(0, 0)
    // },
    //2.3监听滚动位置
    scrollListen(position){
      this.showBack = (-position.y) > 900
      
      this.showTabControl = (-position.y) > this.tabControlOffsetTop 

    },
    //2.4监听上拉加载
    loadMore(){
      //调用获取数据函数
      this.getHomeGoods(this.currentType)
    },
    //2.5监听轮播图加载
    swiperImgLoad(){
      //这里需要减掉navBar“购物街”的高度 -> 44
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44
      //goodsList的offsetTop - 购物街高度44 - tabControl高度40 - goodsList的margin-top：10
      this.goodsListOffsetTop = this.$refs.goodsList.$el.offsetTop - 44 - 40 - 10
    }
     
  }

}
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .content1 {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .tab-control-n {
    position: fixed;
    top:44px;
    left:0;
    right:0;

    z-index: 9;
  }


</style>