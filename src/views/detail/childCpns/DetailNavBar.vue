<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="left-back" slot="left" @click="backHome">
        <img src="@/assets/img/back.png" alt="">
      </div>

      <div class="center" slot="center">
        <span v-for="(item, index) in title" :key="index"
              @click="itemClick(index)" 
              :class="{active:currentIndex === index }">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data(){
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('changeContent', index)
    },
    backHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .left-back {
    width: 100%;
  }

  .left-back img {
    width: 50%;
  }

  .center {
    display: flex;
  }

  .center span {
    flex: 1;
    font-size: 13px;
  }

  .active {
    color: var(--color-tint);
    font-weight: 600;
  }
</style>
