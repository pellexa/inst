<script>
import { mapGetters, mapActions } from 'vuex'
import ThePrice from '@/components/ThePrice.vue'
import CheckoutButton from '@/components/CheckoutButton.vue'

export default {
  name: 'TheCheckoutPreview',
  components: {
    ThePrice,
    CheckoutButton,
  },
  computed: {
    ...mapGetters({
      favoritesCount: 'favorites/getCount',
      getCartProducts: 'cart/getProducts',
      getAmount: 'cart/getAmount',
    }),
  },

  methods: {
    ...mapActions({
      setPreview: 'cart/setIsCheckoutPreview',
    }),
  },
}
</script>

<template>
  <div class="checkout-preview">
    <ThePrice :amount="getAmount" class="checkout__price" />
    <CheckoutButton @click="setPreview(false)" />
  </div>
</template>

<style>
.checkout-preview {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px var(--gap);
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  border-top: 1px solid var(--color-thin);
  width: 100%;
  height: 88px;
}

.checkout__price {
  font-size: 20px;
}
</style>
