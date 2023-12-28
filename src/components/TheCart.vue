<script>
import { mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'
import TheEmpty from '@/components/TheEmpty.vue'
import TheCheckout from '@/components/TheCheckout.vue'

export default {
  name: 'TheCart',
  components: {
    CartItem,
    TheEmpty,
    TheCheckout,
  },
  computed: {
    ...mapGetters({
      products: 'cart/getProducts',
    }),
  },
}
</script>

<template>
  <div v-if="products.length" class="cart">
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

    <TheCheckout />
  </div>
  <TheEmpty v-else>В корзине пока пусто</TheEmpty>
</template>

<style>
.cart__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}
</style>
