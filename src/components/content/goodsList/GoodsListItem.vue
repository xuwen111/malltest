<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show ? goodsItem.show.img : goodsItem.image" @load="imageLoad" alt="">
      <div class="item-info">
        <div class="title-info">{{goodsItem.title}}</div>
        <span class="price">￥{{goodsItem.price}}  </span>
        <span class="collect">
          <!-- <img src="@/assets/img/home/collect.png" alt=""> -->
          {{goodsItem.cfav}}</span>
      </div>
  </div>
</template> 

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    width: 50%;
    padding: 0 5px 45px 5px;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .item-info {
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 0;
    font-size: 13px;
    text-align: center;
    overflow: hidden;
  } 

  .item-info .title-info {
    margin-top: 100px;
    line-height: 1.5;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
  }

  .item-info .price {
    color: var(--color-tint);
    margin-right: 20px;
 }

  .item-info .collect {
    position: relative;
  }

  .item-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/home/collect.png") 0 0/14px 14px;
  }

  /* .collect img {
    width: 20px;
    height: 20px;
  } */

</style>