<template>
  <div id="detail">
    <detail-nav-bar @changeContent="changeContent" ref="navBar"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :swiperList="itemList"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <shop-info :shopInformation="shopInformation"/>
      <detail-image :detailImages="detailImages" @detailImageLoad="detailImageLoad"/>
      <detail-param ref="params" :detailParams="detailParams"/>
      <detail-comment-info ref="comments" :detailComment="detailComment"/>
      <div ref="recommendTitle" class="word">也许你还会喜欢这些 >></div>
      <goods-list :goods="detailRecommend"/>
    </scroll>
    <top-back v-show="showBack" @click.native="backClick"/>
    <detail-bottom-bar @chooseStyle="chooseStyle"/>
    <choose-bar :chooseBarInfo="chooseBarInfo" 
                v-show="showChooseBar" 
                @addToCart="addToCart"
                @cancelShowChoose="cancelShowChoose"/>
    <toast :message="message" :isShow="isShow"/>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar'
import DetailBaseInfo from './childCpns/DetailBaseInfo'
import ShopInfo from './childCpns/ShopInfo'
import DetailImage from './childCpns/DetailImage'
import DetailParam from './childCpns/DetailParam'
import DetailCommentInfo from './childCpns/DetailCommentInfo'
import DetailBottomBar from './childCpns/DetailBottomBar'
import ChooseBar from './childCpns/ChooseBar'

import DetailSwiper from '@/components/common/swiper/DetailSwiper.vue'
import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goodsList/GoodsList'
import Toast from '@/components/common/toast/Toast'

import { getDetail, getRecommend, Goods, ShopInformation, DetailImages, DetailParams, DetailComment} from '@/network/detail'
import { debounce } from '@/common/utils.js'
import { itemImageListenerMixin, backTopMixin} from '@/common/mixin'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    Scroll,
    DetailBaseInfo,
    ShopInfo,
    DetailImage,
    DetailParam,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    ChooseBar,
    Toast
  },
  data(){
    return {
      iid: null,
      itemList: null,
      goods: {},
      shopInformation: {},
      detailImages: {},
      detailParams: {},
      detailComment: {},
      detailRecommend: [],
      moveList: [],
      getMoveList: null,
      y: 0,
      currentIndex: null,
      message: '',
      isShow: false,
      chooseBarInfo: {},
      showChooseBar: false
    }
  },
  mixins: [itemImageListenerMixin, backTopMixin],
  created(){
    //1.保存home传入的iid
    this.iid = this.$route.params.iid
    
    //2.根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(data)

      //2.1 获取轮播图数据
      this.itemList = res.result.itemInfo.topImages
      // console.log(data);

      //2.2 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)

      //2.3 获取店铺head
      this.shopInformation = new ShopInformation(data.shopInfo)

      //2.4 获取商品detailImage
      this.detailImages = new DetailImages(data.detailInfo)

      //2.5 获取参数信息
      this.detailParams = new DetailParams(data.itemParams)

      //2.6 获取评价信息
      this.detailComment = new DetailComment(data.rate.cRate, data.rate.list)

      //2.7 获取点击购物车后显示的chooseBar数据
      this.chooseBarInfo = data.skuInfo

    })

    //3.获取详情页的推荐数据(重新请求)
    getRecommend().then(res => {
      // console.log(res.data.list);
      this.detailRecommend = res.data.list
    })

    //定义获取组件的offsetTop函数,并防抖处理
    this.getMoveList = debounce(() => {
      this.moveList = []
      this.moveList.push(0)
      this.moveList.push(this.$refs.params.$el.offsetTop - 5)
      this.moveList.push(this.$refs.comments.$el.offsetTop)
      this.moveList.push(this.$refs.recommendTitle.offsetTop - 5)
      this.moveList.push(Number.MAX_VALUE)
      // console.log(this.moveList);  
    }, 200)

  },
  methods: {
    //1.监听详情图片的加载
    detailImageLoad(){
      this.$refs.scroll.refresh()
      //调用获取组件offsetTop的函数
      this.getMoveList()
    },
    //2.监听navBar标题的点击
    changeContent(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.moveList[index] + 44, 200)
    },
    //3.监听滚动位置
    contentScroll(position){
      //判断回到顶部是否显示
      this.showBack = (-position.y) > 900

      //需要把navBar的高度44px减去,判断内容滚动位置->更改navBar标题
      this.y = -position.y + 44
      for(let i in this.moveList){
        i  = parseInt(i)
        if(this.currentIndex !==i && (this.y >= this.moveList[i] && this.y < this.moveList[i+1])){
          //减少刷新次数
          this.currentIndex = i
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      }
    },

    //4.监听“加入购物车”按钮的点击 ->显示chooseBar
    chooseStyle(){
      //显示chooseBar
      this.showChooseBar = true
    },

    //5.监听chooseBar的“确定”按钮点击
    addToCart(){

      const product = {}
      //5.1注意一定要传递iid -> 是商品的唯一标识
      product.iid = this.iid
      product.title = this.goods.title
      product.price = this.goods.price
      product.image = this.detailImages.detailImage[0].list[0]

      //5.2收起chooseBar
      this.showChooseBar = false

      //5.3传递给mutations更改state
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
      })
    },

    //6.监听chooseBar的“取消”监听
    cancelShowChoose(){
      this.showChooseBar = false
    }
    
  }
}
</script>

<style scoped>
  #detail {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .word {
    padding: 5px 0;
    margin: 0 auto 20px auto;
    width: 200px;
    font-size: 14px;
    text-align: center;
    background-color: lightpink;
    color: #fff;
    border-radius: 10px;
  }
</style>
