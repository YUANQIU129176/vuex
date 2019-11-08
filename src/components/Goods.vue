<template>
  <div class="goods">
    <h1>我是商品</h1>
    <ul>
      <li v-for="item in products" :key="item.id">
        <span>{{item.title}}</span>
        -
        <span>{{ item.price }}</span>
        <button @click="addToCart(item)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入模块
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("goods", {
      products: "all"
    })
  },
  created() {
    // 发射器
    this.$store.dispatch("goods/getProducts");
    // ...mapActions({

    // })
  },
  methods: {
    // addToCar(item) {
    //   console.log(item);
    // }
    // 通过actions来映射到mutations中
    ...mapActions("cart", ["addToCart"])
  }
};
</script>
<style>
</style>