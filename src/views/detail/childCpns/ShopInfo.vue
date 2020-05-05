<!-- 店铺信息组件 -->
<template>
  <div class="shop-info">
    <!-- 1.店铺name、logo -->
    <div class="shop-title">
      <img :src="shopInformation.logo" alt="">
      <span>{{shopInformation.name}}</span>
    </div>
    <!-- 2.店铺count数据 -->
    <div class="s-score">
      <!-- 2.1销量、宝贝个数 -->
      <div class="shop-count">
        <div class="shop-info-left">
          <div class="shop-sells">
            <p>{{shopInformation.sells | shopCounterFilter}}</p>
            <span>总销量</span>
          </div>
        </div>
        <div class="shop-info-center">
          <div class="shop-goods-count">
            <p>{{shopInformation.goods}}件</p>
            <span>全部宝贝</span>
          </div>
        </div>
      </div>
      <!-- 2.2店铺分数评价 -->
      <div class="score">
        <div class="score-item" v-for="(item, index) in shopInformation.shopScore" :key="index" :class="{hignScore: item.isBetter}">
          <div class="name">{{item.name}}: </div>
          <div class="number">{{item.score}}</div>
          <div class="text" v-show="item.isBetter"> 高</div>
          <div class="text" v-show="!item.isBetter">低</div>
        </div>
      </div>  
    </div>
    <!-- 3进店逛逛 -->
      <div class="have-a-look">
        <a :href="shopInformation.inShop">进店逛逛</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInformation: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    shopCounterFilter: function(value){
      if(value < 10000){
        return value 
      }else{
        return (value/10000).toFixed(2) + '万'
      }
    }
  }
}
</script>

<style scoped>
  .shop-title {
    width: 100vw;
    /* 垂直居中 */
    display: flex;
    align-items: center;
    margin: 25px 5px 10px 0;
  }

  .shop-title img {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .shop-title span {
    margin-left: 5px;
    font-size: 13.5px;
    color: var(--color-tint);
  }

  .s-score {
    display: flex;
    font-size: 13.5px;
    line-height: 1.5;
    align-items: center;
  }

  .s-score .shop-count {
    width: 52%;
    display: flex;
    border-right: solid 1.5px #ddd;
  }

  .shop-count .shop-info-left,
  .shop-count .shop-info-center {
    flex: 1;
    display: inline-block;
    margin: 5px 10px;
    text-align: center;
  }

  .shop-count .shop-info-left span,
  .shop-count .shop-info-center span {
    margin-top: 10px;
  }

  .score-item div{
    display: inline-block;
    margin: 5px 0;
    font-size: 13.5px;
  }

  .score .name {
    margin-left: 15px;
  }

  .score .number {
    margin-left: 5px;
    width: 40px;
    color: lightgreen;
  }

  .score .text {
    color: #fff;
    background: lightgreen;
    padding: 0 2px;
  }

  .hignScore .number {
    color: rgb(241, 90, 90);
  }

  .hignScore .text {
    background-color: rgb(241, 90, 90);
  }

  .have-a-look {
    margin: 15px auto 20px auto;
    padding: 3px 3px;
    font-size: 13.5px;
    width: 200px;
    text-align: center;
    border-radius: 5px;
    background-color: rgb(247, 203, 209);
  }







</style>