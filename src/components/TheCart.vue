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
  <div class="cart">
    <template v-if="products.length">
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
    </template>
    <template v-else>
      <div class="cart__empty">
        <TheEmpty>В корзине пока пусто</TheEmpty>
      </div>
    </template>
  </div>
</template>

<style>
.cart__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}
</style>
