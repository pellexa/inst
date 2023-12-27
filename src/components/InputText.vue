<script>
export default {
  name: 'InputText',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
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
    handlerInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="input-text">
    <input
      class="input-text__field"
      :id="id"
      :name="name"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handlerInput"
    />
    <span class="input-text__error">{{ error }}</span>
  </div>
</template>

<style>
.input-text {
  display: flex;
  flex-direction: column;
}

.input-text__field {
  font-size: 14px;

  height: 48px;
  width: 328px;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  padding: 12px 16px;
}

.input-text__error {
  font-size: 11px;
  line-height: 16px;
  color: #ff0000;
}
</style>
