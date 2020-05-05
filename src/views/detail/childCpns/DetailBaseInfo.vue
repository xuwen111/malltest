<!-- 商品基础信息组件 -->
<template>
  <div class="base-info">
    <!-- 标题 -->
    <div class="title">
      {{goods.title}}
    </div>
    <!-- 价格 -->
    <div class="price">
      <div class="newPrice">￥{{goods.price}}</div>
      <div class="oldPrice">{{goods.oldPrice}}</div>
      <span class="discount" v-show="!isDiscount" :style="{background: goods.discountColor}">
        {{goods.discount}}
      </span>
    </div>
    <!-- 收藏、销量 -->
    <div class="columns">
      <div class="columns-item" v-for="(item, index) in goods.columns" :key="index" v-show="index < 2">{{item}}</div>
      <div class="columns-item">{{goods.address}}</div>
    </div>
    <!-- 默认services：快递、退货信息 -->
    <div class="service">
      <div class="service-item" v-for="(item, index) in goods.services" :key="index" v-show="index < 3">
        <img :src="item.icon" alt="">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      // isDiscount: true,
    }
  },
  computed: {
    isDiscount(){
      return !this.goods.discount
    }
  }
}


</script>

<style>
  .title {
    padding: 10px 10px;
    line-height: 1.5;
    font-size: 13.5px;
    color: #000;
  }

  .price div {
    display: inline-block;
  }

  .newPrice {
    color: var(--color-tint);
    margin-left: 10px;
    font-weight: 600;
  }

  .oldPrice {
    margin-left: 5px;
    font-size: 13px;
    text-decoration-line: line-through;
  }

  .discount {
    margin-left: 10px;
    padding: 2px 15px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
  }

  .columns {
    margin-top: 5px;
    display: flex;
  }

  .columns-item {
    flex: 1;
    padding: 10px 10px;
    font-size: 12px;
    text-align: justify;
  }

  .service {
    display: flex;
    width: 100vw;
    font-size: 12px;
    border-top: solid 1px #eee;
    border-bottom: solid 1px #eee;
  }

  .service-item {
    flex: 1;
    width: 100%;
    margin: 10px 5px;
  }

  .service-item img {
    width: 10%;
  }
</style>