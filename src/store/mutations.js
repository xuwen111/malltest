export default {
  addCount(state, oldProduct){
    oldProduct.count++
  },
  addToCart(state, payload){
    payload.count = 1
    payload.isChecked = true
    state.cartList.push(payload)
  }
}