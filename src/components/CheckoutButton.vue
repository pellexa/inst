<script>
export default {
  name: 'CheckoutButton',
}
</script>

<template>
  <button class="checkout-button" color="primary">Оформить</button>
</template>

<style>
.checkout-button {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  padding: 12px 0;
  cursor: pointer;
  width: 152px;
  color: #fff;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--gap);
}
</style>
