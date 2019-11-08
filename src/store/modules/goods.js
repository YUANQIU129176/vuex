
// 把接口的数据导入进来
import * as shop from '@/api/shop'
console.log(shop.getAllProducts());
const state = {
  all: []
}

const mutations = {
  // 能够传递参数 state
  setProducts(state, playload) {
    state.all = playload.products
  },
  delGoodsInventoty(state, playload) {
    // console.log(playload.id)
    let newGoods = state.all.find((all) => all.id === playload.id)
    // 让库存减减
    newGoods.inventory--
  }
}

const getters = {

}

const actions = {
  // 通过异步的方式来提取出数据值
  async getProducts({ commit }) {
    // console.log(commit);
    // 获取导入进来的数据值
    const products = await shop.getAllProducts()
    commit({
      type: 'setProducts',
      products
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}