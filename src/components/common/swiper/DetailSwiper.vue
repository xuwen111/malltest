<template>
  <div class="wrapper">
      <swiper :options="swiperOption" class="swiper-container" >
        <swiper-slide class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          <img :src="item" alt="" @load="imageLoad">
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import './swiper.css'

export default {
  name: 'DetailSwiper',
  components:{
    Swiper,
    SwiperSlide,
  },
  props: {
    swiperList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      isEmit: false
    }
  },
  methods: {
    imageLoad(){
      if(!this.isEmit){
        this.$emit('swiperImgLoad')
        this.isEmit = true
      }
    }
  }
}
</script>

<style scoped>
  .swiper-item {
    width: 100%;
  }

  .swiper-slide {
    height: 300px;
  }

  .swiper-slide img{
    width: 100%;
  }
</style>

// 更改pagination圆点的颜色
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background :#ffffff
</style>