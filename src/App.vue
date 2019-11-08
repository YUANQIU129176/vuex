<template>
  <div id="app">
    <goods></goods>
    <cart></cart>
  </div>
</template>

<script>
// 引入组件
import Cart from "./components/Cart";
import Goods from "./components/Goods";
export default {
  name: "app",
  components: {
    Cart,
    Goods
  }
};
</script>

<style>
</style>
