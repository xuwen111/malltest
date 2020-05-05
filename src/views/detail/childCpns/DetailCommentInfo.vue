<template>
  <div class="big-content">
    <div class="content">
      <div class="title">
        用户评价({{detailComment.commentCount}})
        <a href=""> <div class="right">==全部评价</div> </a>
      </div>

      <div class="comment-item" v-for="(item, index) in detailComment.list" :key="index">
        <!-- 评价用户信息 -->
        <div class="user">
          <img :src="item.user.avatar" alt="">
          {{item.user.uname}}
        </div>
        <!-- 购买商品分类信息 -->
        <div class="goods-info">
          {{item.created | showTimeFilter}}  【 {{item.style}}】
        </div>
        <!-- 评价内容 -->
        <div class="comment-content">
          {{item.content}}
        </div>
        <!-- 额外信息评价 -->
        <div class="extra-info" v-for="(item, index) in item.extraInfo" :key="index"> 
          [{{item}}]
        </div>
        <!-- 评价图片 -->
        <div class="comment-image"><img :src="item.images" alt=""></div>
      </div>
    </div>   
  </div>

</template>

<script>
import {formatDate} from "@/common/utils"

export default {
  name: 'DetailCommentInfo',
  props: {
    detailComment: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showTimeFilter(val){
      //1.将时间戳转换成Date对象
      const date = new Date(val * 1000)
      //2.将date对象转换成格式化字符串
      return formatDate(date, 'yyyy-MM-dd ')
    }
  }
}
</script>

<style scoped>
  .big-content {
    width: 100vw;
  }

  .content {
    margin: 30px 0;
    padding-top: 5px;
    border-top: solid 8px #eee;
    border-bottom: solid 8px #eee;
    width: 100%;
    font-size: 13.5px;
  }

  .title {
    color: #777;
    font-size: 15px;
    font-weight: 600;
  }

  .right {
    font-size: 13.5px;
    width: 70px;
  }

  .user {
    margin: 5px 0;
    color: var(--color-high-text);
  }

  .user img {
    margin: 0 3px 0 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .goods-info {
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 12px;
  }

  .comment-content {
    margin: 0 10px;
    text-align: justify;
  }

  .extra-info {
    margin: 3px 10px;
    font-size: 12.5px;
    color: pink;
  }

  .comment-item {
    width: 100%;
  }

  .comment-image img{
    width:150px;
    margin: 5px 0 5px 10px;
  }

</style>