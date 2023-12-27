<script>
export default {
  name: 'InputPhone',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  methods: {
    handlerInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-phone">
    <input
      class="input-phone__field"
      :id="id"
      :name="name"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handlerInput"
    />
    <span class="input-phone__error">{{ error }}</span>
  </div>
</template>

<style>
.input-phone {
  display: flex;
  flex-direction: column;
}

.input-phone__field {
  font-size: 14px;

  height: 48px;
  width: 328px;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  padding: 12px 16px;
}

.input-phone__error {
  font-size: 11px;
  line-height: 16px;
  color: #ff0000;
}
</style>
