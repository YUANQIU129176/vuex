const state = {
  goodsData: []
}

const getters = {
  // 显示购物车的数据
  showCartGoods(state, getters, rootState) {
    console.log(rootState)
    // console.log(getters)
    return state.goodsData.map((newgoods) => {
      console.log(newgoods)
      const newGetQuaVulan = rootState.goods.all.find(item => item.id === newgoods.id)
      return {
        id: newGetQuaVulan.id,
        title: newGetQuaVulan.title,
        price: newGetQuaVulan.price,
        quantity: newgoods.quantity
      }
    })
  },
  // 计算总价格
  totalPrice(state, getters) {
    return getters.showCartGoods.reduce((total, newGetQuaVulan) => {
      return total + (newGetQuaVulan.price * newGetQuaVulan.quantity)
    }, 0)
  }
}

const mutations = {

  // 添加整个商品进购物车的
  addAllGoods(state, playload) {
    state.goodsData.push({
      id: playload.id,
      quantity: 1
    })
  },
  addAllGoodsQuantity(state, playload) {
    let goodsId = state.goodsData.find(goodsData => goodsData.id === playload.id)
    goodsId.quantity++
  }
}

const actions = {
  // 获取添加过来的货物
  // 1 如果购物车中原有物品则为其的数量添加1 
  // 2 否则添加整个商品到购物车中
  // 3 整个库存的数据将减少
  addToCart({ commit, state }, goods) {
    // console.log(goods)
    // 3、 如果购物车有该物品inventory库存有数目
    if (goods.inventory) {
      //查找购物车中是否含有该物品
      const goodsId = state.goodsData.find(goodsData => goodsData.id === goods.id)
      if (goodsId) {
        commit({
          type: 'addAllGoodsQuantity',
          id: goods.id
        })
      } else {
        //购物车原本没有该物品的时候
        commit('addAllGoods', goods)
      }
      // 添加个发射器 让其库存减少 操作对应的id商品数目库存的数量
      commit('goods/delGoodsInventoty', { id: goods.id }, { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}