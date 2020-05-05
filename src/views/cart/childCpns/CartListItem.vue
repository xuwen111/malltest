<template>
  <div class="item">
    <div class="image" @click="isChoosed">
      <img v-if="product.isChecked" src="@/assets/img/cart/choose.png" alt="">
      <div v-else class="nothing"></div>
    </div>
    <div class="item-info">
      <img :src="product.image" alt="">
      <div>
        <div class="title">{{product.title}}</div>
        <div class="price-count">
          <div class="price">￥{{product.price}}</div>
          <div class="count">
            <button class="btn btn-dark btn-sm" @click="reduceCount" >-</button>
            <div class="num"> {{product.count}} </div>
            <button class="btn btn-dark btn-sm" @click="addCount">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {

    }
  },
  methods: {
    isChoosed(){
      this.product.isChecked = !this.product.isChecked
    },
    addCount(){
      this.product.count ++
    },
    reduceCount(){
      if(this.product.count > 1){
        this.product.count --
      }
      
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    width: 100vw;
    margin: 15px 5px;
    padding-top: 5px; 
    padding-bottom: 10px;;
    /* padding-left: 20px; */
    border-bottom: solid 3px #eee;
  }

  .image{
    flex:1;
    width: 5%;
    margin: auto 5px auto 0;
  }

  .image img {
    width: 15px;
  }

  .image .nothing {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 2px #ccc;
  }

  .item-info {
    display: flex;
  }

  .item-info img {
    flex: 1;
    width: 25%;
    height: 100px;
  }

  .title {
    font-size: 12px;
  }

  .price-count {
    display: flex;
  }

  .price-count .price {
    flex: 1;
    margin-left: 30px;
    margin-top: 3px;
    font-size: 14px;
    color: var(--color-tint);
  }

  .price-count .count {
    flex: 1;
  }

  .price-count .count * {
    display: inline-block;
    align-items: center;
  }

  .btn-sm {
    width: 10px;
    height: 20px;
    line-height: 10px;
    text-align: center;
  }

  .num {
    padding-left: 3px;
    padding-right: 3px;
    font-size: 14px;
  }

  
</style>