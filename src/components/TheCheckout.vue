<script>
import { mapGetters } from 'vuex'

import TheCheckoutForm from '@/components/TheCheckoutForm.vue'
import TheCheckoutPreview from '@/components/TheCheckoutPreview.vue'

export default {
  name: 'TheCheckout',
  components: { TheCheckoutPreview, TheCheckoutForm },
  computed: {
    ...mapGetters({
      isPreview: 'cart/getIsCheckoutPreview',
    }),
  },
}
</script>

<template>
  <Transition name="checkout_slide-up">
    <component
      :is="isPreview ? 'TheCheckoutPreview' : 'TheCheckoutForm'"
    ></component>
  </Transition>
</template>

<style>
.checkout_slide-up-enter-active,
.checkout_slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.checkout_slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.checkout_slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
