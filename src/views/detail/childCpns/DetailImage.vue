<!-- 商品详情组件 -->
<template>
  <div class="detail-image">
    <div class="line">
      <div class="top">
    </div>
    <div class="desc">
      {{detailImages.desc}}
    </div>
    <div class="bottom">
    </div>
    </div>
    <div class="image-item" v-for="(item, index) in detailImages.detailImage" :key="index">
      <div class="image-label">------------------ {{item.key}} ------------------</div>
      <div class="image" v-for="(item, index) in item.list" :key="index" v-show="index<detailImages.detailImage[0].list.length-1">
        <img :src="item" alt="" @load="detailImageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImage',
  props: {
    detailImages: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    detailImageLoad(){
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style scoped>
  .detail-image {
    padding-top: 20px;
    width: 100vw;
  }

  .line {
    position: relative;
    text-align: justify;
  }

  .line .top {
    margin-left: 5px;
    width:40%;
    border-bottom: solid 1px var(--color-tint);
  }

  .line .bottom{
    position: absolute;
    bottom: 0;
    right: 5px;
    width:40%;
    border-top: solid 1px var(--color-tint);
  }

  .desc {
    font-size: 13.5px;
    line-height: 1.5;
    margin: 10px 5px;
  }

  .image-item {
    margin: 5px 5px;
  }

  .image-label {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 13px;
    text-align: center;
  }

  .image img {
    width: 100%;
  } 
</style>