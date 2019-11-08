// 引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

// 使用
Vue.use(Vuex)
// 引用各模块
import state from './state'
import mutations from './mutations'
import getters from './getters'
import acitons from './actions'

// 引用购物车模块和商品模块
import cart from './modules/cart'
import goods from './modules/goods'

// 暴露数据
const store = new Vuex.Store({
  modules: {
    cart,
    goods
  },
  state,
  mutations,
  getters,
  acitons
})

export default store