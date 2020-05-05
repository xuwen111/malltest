<template>
  <div class="side-bar"> 
    <div class="image" @click="ChoosedAll">
      <img v-if="allCheck" src="@/assets/img/cart/choose.png" alt="">
      <div v-else class="nothing"></div>
      全选
    </div>

    <div class="total-price">
      合计: ￥{{totalPrice}}
    </div>

    <div class="buyIt">结 算({{buyLength}})</div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CartSideBar',
  data(){
    return {
      //保存全选按钮的选中状态
      allChecked: true
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item => {
        return item.isChecked
      }).reduce((preValue, item) => {
        return preValue += item.price * item.count
      }, 0).toFixed(2)
    },
    buyLength(){
      return this.cartList.filter(item => {
        return item.isChecked
      }).length
    },
    //根据item的选中状态切换“全选按钮”的选中状态，并用this.allChecked保存状态
    allCheck(){
      if(this.cartList.length === 0){
        return this.allChecked = false
      }else{
        return this.allChecked = !this.cartList.filter(item => !item.isChecked).length
      }
    }
  },
  methods: {
    ChoosedAll(){
      this.allChecked = !this.allChecked
      for(let item of this.cartList){
        if(this.allChecked){
          item.isChecked = true
        }else{
          item.isChecked = false
        }
      }
    }
  }
}
</script>

<style scoped>
  .side-bar {
    display: flex;
    width: 100vw;
    height: 42px;
    padding-top: 5px; 
    background-color: pink;
    /* padding-left: 20px; */
    border-bottom: solid 3px #eee;
  }

  .image {
    flex:1;
    display: flex;
    align-items: center;
    width: 5%;
    margin: auto 5px auto 10px;
    font-size: 15px;
    font-weight: 500;
  }

  .image img {
    width: 15px;
    margin-right: 5px;
  }

  .image .nothing {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: solid 2px #ccc;
    background-color: #fff;
    margin-right: 5px;
  }

  .total-price {
    display: flex;
    align-items: center;
  }

  .buyIt {
    margin-left: 20px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    width: 80px;
    height: 29px;
    font-size: 13.5px;
    color: #eee;
    padding: 0 15px;
    border-radius: 10px;
    background-color: coral;
  }

  
 
</style>