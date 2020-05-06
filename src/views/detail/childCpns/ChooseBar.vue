<template>
  <div class="choose-bar">
    <div class="title">
      <!-- 1.左边：默认商品图片 -->
      <!-- 1.1默认选择图片 -->
      <div class="default-image" v-if="defaultImage">
        <div v-for="(item, index) in chooseBarInfo.skus" :key="index" 
             v-show="index === 0">
          <img :src="item.img">
        </div>
      </div>
      <!-- 1.2当点击颜色选择时，不再显示默认图片 -->
      <!-- 注意：满足styleId的item不止一个，在v-show中使用find找到满足选项的第一个item -->
      <div class="currenr-style-image" v-else>
        <div v-for="(item, index) in chooseBarInfo.skus" :key="index" 
             v-show="item === chooseBarInfo.skus.find(item => item.styleId == currentStyleId)">
          <img :src="item.img">
        </div>
      </div>
      <!-- 2.右边：默认价格、库存 -->
      <div class="right-info">
        <div class="default-price">
          {{chooseBarInfo.defaultPrice}}
        </div>
        <div class="total-stock">
          总库存：{{chooseBarInfo.totalStock}}件
        </div>
        <div class="text">
          选择 颜色/尺码
        </div>
      </div>
      <!-- 3.取消按钮 -->
      <div class="cancel" @click="cancelShowChoose">
        <img src="@/assets/img/cancel.png" alt="">
      </div>
    </div>

    <!-- 尺码、颜色选择 -->
    <div class="content">
      <scroll class="s-scroll">
        <div v-for="(item, index) in chooseBarInfo.props" :key="index">
          <!-- 颜色选择 -->
          <div class="first-row" v-show="index === 0">
            <div class="label">{{item.label}}</div>
            <div class="options">
              <div class="options-item" 
                   v-for="(item, index) in item.list" :key="index" 
                   @click="colorChoosed(index, item.styleId)"
                   :class="{active: currentStyleIndex === index}" >
                {{item.name}}
              </div>
            </div>
          </div>
          <!-- 尺寸选择 -->
          <div class="second-row" v-show="index > 0">
            <div class="label">{{item.label}}</div>
            <div class="options">
              <div class="options-item" 
                   v-for="(item, index) in item.list" :key="index" 
                   @click="sizeChoosed(index)"
                   :class="{active: currentSizeIndex === index}">
                {{item.name}}
              </div>
            </div>
          </div>

        </div>
      </scroll>
    </div>

    
    <!-- “确定”按钮 -->
    <div class="sure" @click="isAddTo">确 定</div>

  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'ChooseBar',
  components: {
    Scroll
  },
  props: {
    chooseBarInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      currentStyleIndex: 0,
      currentStyleId: 0,
      currentSizeIndex: 0,
      defaultImage: true,
      show: true
    }
  },
  computed: {
    findFirst(arry){
      arry.find(item => {
        item.styleId === this.currentStyleId
      })
    }
  },
  methods: {
    //1.颜色选项的点击监听
    colorChoosed(index, id){
      this.currentStyleIndex = index
      this.currentStyleId = id
      this.defaultImage = false
    },
    //2.颜色选项的点击监听
    sizeChoosed(index){
      this.currentSizeIndex = index
    },
    //3.“确定”按钮的点击监听
    isAddTo(){
      this.$emit('addToCart')
    },
    //4.“取消”按钮的点击监听
    cancelShowChoose(){
      this.$emit('cancelShowChoose')
    }
  }
}
</script>

<style scoped>
  .choose-bar {
    width: 100vw;
    height: 450px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 29;
  }
  .title {
    display: flex;
    margin-bottom:  10px;
  }
  .default-image,
  .currenr-style-image {
    margin-top: 15px;
    width: 40%;
  }
  img {
    width: 100px;
    height: 120px;
  }
  .right-info {
    flex: 1;
    margin-top: 15px;
  }
  .cancel {
    width: 10%;
    margin-left: 50px;
  }
  .cancel img {
    width: 20px;
    height: 20px;
  }
  .default-price {
    color: var(--color-tint);
    font-size: 18px;
  }
  .total-stock {
    color: #aaa;
    margin: 5px 0;
  }
  .content {
    height: calc(100% - 150px - 20px);
  }
  .s-scroll {
    height: 100%;
    overflow: hidden;
  }
  .first-row,
  .second-row {
    margin: 0 10px 15px 15px;
  }
  .label {
    margin: 10px 0 10px 0;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
  }
  .options-item {
    width: 16%;
    margin: 0 10px 5px 0;
    font-size: 13px;
    text-align: center;
    border: solid 1px #ddd;
    border-radius: 5px;
  }
  .active {
    border-color: pink;
    color: var(--color-tint);
  }
  .sure {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: var(--color-tint);
    text-align: center;
    font-weight: 600;
    color: #fff;
    border-radius:  5px;
  }
</style>