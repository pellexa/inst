<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheCart',
  computed: {
    ...mapGetters({
      products: 'cart/getProducts',
    }),
  },
}
</script>

<template>
  <div class="cart">
    <div v-for="item in products" :key="item.id" class="cart__item">{{item.title}}</div>
  </div>
</template>

<style>
.cart__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}
</style>
