<template>
  <div id="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message, time = 2000){
      this.message = message
      this.isShow = true
      //设置定时器，取消显示
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, time);  
    }
  }
}
</script>

<style scoped>
  #toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    padding: 5px 0;
    border-radius: 10px;
    z-index: 9;
    width: 60%;
    text-align: center;

    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
</style>