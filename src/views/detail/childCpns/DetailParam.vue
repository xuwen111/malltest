<!-- 商品参数信息组件 -->
<template>
  <div class="container">
    <!-- 其他参数数据表 -->
    <div class="key">{{detailParams.key1}} :</div>
    <div class="sets">
      <table class="table table-striped" >
        <tr v-for="(item, index) in detailParams.sets" :key="index">
          <td class="item-key">{{item.key}}</td>
          <td class="item-value high">{{item.value}}</td>
        </tr>
      </table>
    </div>

    <!-- 商品尺寸参照表 -->
    <div class="key">{{detailParams.key2}} :</div>
    <div class="params">
      <table class="table table-striped" v-for="(item, index) in detailParams.tables" :key="index">
        <tr v-for="(item, index) in item" :key="index">
          <td v-for="(item, index) in item" :key="index" :class="{high: index>0}">{{item}}</td>
        </tr>
      </table>
    </div>

    <!-- 手工测量，存在误差 -->
    <div class="disclaimer">
      {{detailParams.disclaimer}}
    </div>
  </div>
</template>

<script>
// import '@/assets/css/bootstrap.css';

export default {
  name: 'DetailParam',
  props: {
    detailParams: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
/* @import '../../assets/css/bootstrap.css'; */

  .container {
    width: 100vw;
    line-height: 1.5;
    font-size: 13px;
  }

  .container .key {
    margin: 30px 10px 20px auto;
    font-size: 14px;
    font-weight: 600;
  }

  .table {
    color: #777;
  }

  .sets tr {
    width: 100vw;
    display: flex;
  }

  /* .sets td {
    width: 50%;
    flex: 1;
  } */

  .item-key {
    flex: 1;
    width: 25%;
    display: flex;
    align-items: center;
  }

  .item-value {
    margin-right: 30px;
    width: 75%;
  }

  .high {
    color: var(--color-tint);
  }

  .disclaimer {
    color: var(--color-tint);
    font-size: 12.5px;
    font-weight: 300;
  }
</style>