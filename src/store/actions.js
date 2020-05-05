export default {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      let oldProduct = null
      for(let item of context.state.cartList){
        //如果购物车已经有该商品，则将该商品赋给oldProduct
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }
      //判断oldProduct是否为空
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('addCount', oldProduct)
        resolve('当前添加的商品+1')
      }else{
        // payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('新商品添加成功')
      }
    })
  },
}