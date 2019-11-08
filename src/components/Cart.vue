<template>
  <div class="cart">
    <h1>我是购物车</h1>
    <p v-show="!showCartGoods.length">购物车还没有货物哟！请客官先去商场添加商品</p>
    <ul>
      <li v-for="item in showCartGoods" :key="item.id">
        <span>{{ item.title }}</span>
        -
        <span>{{ item.price }}</span>
        x
        <span>{{ item.quantity }}</span>
      </li>
    </ul>
    <p>总价格是：{{totalPrice}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: "count"
    }),
    ...mapGetters("cart", ["showCartGoods"]),
    // 总价格
    ...mapGetters("cart", ["totalPrice"])
  }
};
</script>
<style>
</style>