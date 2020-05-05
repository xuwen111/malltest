import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装Vuex
Vue.use(Vuex)

const state = {
  cartList: [],
}

//2.创建store对象new Vuex.Store的S要大写
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

//3.导出,挂载到Vue实例上
export default store

