<script>
export default {
  name: 'InputShipping',
  methods: {
    handlerInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    toggle(event) {
      if (event.target.classList.contains('active')) {
        return
      }

      ;[...event.target.parentNode.children].forEach((e) =>
        e.classList.toggle('active'),
      )

      this.$emit('update:modelValue', event.target.dataset.value)
    },
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-shipping">
    <span
      class="intput-shipping__select active"
      data-value="delivery"
      @click="toggle"
      >Доставка</span
    >
    <span class="intput-shipping__select" data-value="pickup" @click="toggle"
      >Самовывоз</span
    >
  </div>
</template>

<style>
.input-shipping {
  display: flex;
  padding: 8px;
  background-color: var(--color-thin);
  width: min-content;
  border-radius: 12px;
}

.intput-shipping__select {
  font-size: 14px;
  padding: 4px 16px;
  border-radius: 8px;
  transition: all 0.25s ease-out;
  cursor: pointer;
}

.intput-shipping__select.active {
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%);
}
</style>
