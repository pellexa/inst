<script>
import { mapGetters, mapActions } from 'vuex'
import CheckoutButton from '@/components/CheckoutButton.vue'
import ThePrice from '@/components/ThePrice.vue'
import InputText from '@/components/InputText.vue'
import InputPhone from '@/components/InputPhone.vue'
import InputShipping from '@/components/InputShipping.vue'
import { validate } from '@/utils/validate'

export default {
  name: 'TheCheckoutForm',
  components: {
    CheckoutButton,
    ThePrice,
    InputText,
    InputPhone,
    InputShipping,
  },
  data() {
    return {
      form: {
        name: {
          value: '',
          validation: { isValid: true, rules: ['require'] },
          validateError: '',
        },
        phone: {
          value: '',
          validation: { isValid: true, rules: ['require', 'phone'] },
          validateError: '',
        },
        shipping: {
          value: 'delivery',
          validateError: '',
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      getCount: 'cart/getCount',
      getAmount: 'cart/getAmount',
      getProducts: 'cart/getProducts',
    }),
  },

  mounted() {
    const el = document.querySelector('.checkout-form')
    el.addEventListener('click', this.closeCheckoutForm)
  },

  beforeUnmount() {
    const el = document.querySelector('.checkout-form')
    el.removeEventListener('click', this.closeCheckoutForm)
  },

  methods: {
    ...mapActions({
      setPreview: 'cart/setIsCheckoutPreview',
      clearCart: 'cart/clearCart',
    }),
    closeCheckoutForm(event) {
      if (!event.target.closest('.checkout-form__content')) {
        this.setPreview(true)
      }
    },

    submit() {
      if (!validate(this.form)) {
        return
      }

      const products = [...this.getProducts]

      console.log(this.form, products)

      this.setPreview(false)
      this.clearCart()
    },
  },
}
</script>

<template>
  <div class="checkout-form">
    <div class="checkout-form__content">
      <p class="checkout-form__text">
        В заказе {{ getCount }} товаром на сумму
        <ThePrice :amount="getAmount"></ThePrice>
      </p>
      <form class="checkout-form__from">
        <InputText
          v-model="form.name.value"
          id="name"
          name="name"
          type="text"
          placeholder="name*"
          :field="form.name"
          :error="form.name.validateError"
        />
        <InputPhone
          v-model="form.phone.value"
          id="phone"
          name="phone"
          type="text"
          placeholder="телефон*"
          :field="form.phone"
          :error="form.phone.validateError"
        />
        <InputShipping v-model="form.shipping.value" />
        <CheckoutButton class="checkout-form__button" @click.prevent="submit" />
      </form>
    </div>
  </div>
</template>

<style>
.checkout-form {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0 0 0 / 50%);
  display: flex;
  align-items: end;
}

.checkout-form__content {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: 32px 23px 20px 24px;
  border-radius: 16px 16px 0 0;
  background: var(--color-background);
}

.checkout-form__from {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.checkout-form__text {
  font-size: 14px;
}

.checkout-form__button {
  width: 100%;
}
</style>
