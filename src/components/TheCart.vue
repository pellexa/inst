<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'

export default {
  name: 'TheCart',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters({
      products: 'cart/getProducts',
    }),
  },
}
</script>

<template>
  <div class="cart">
    <div v-for="item in products" :key="item.id" class="cart__item">
      <CartItem
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price * item.count"
        :quantity="item.quantity"
        :count="item.count"
      />
    </div>
  </div>
</template>

<style>
.cart__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}
</style>
