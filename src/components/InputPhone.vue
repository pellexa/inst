<script>
import { nextTick } from 'vue'

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
      let value = e.target.value
      let valueLength = value.length
      let prevValue = this.modelValue
      let currentSymbol = value.slice(-1)

      this.$emit('update:modelValue', value)

      nextTick(() => {
        if (currentSymbol.match(/\D/g)) {
          this.$emit('update:modelValue', value.replace(/^(.*)\D/g, '$1'))
          return
        }

        if (valueLength === 1) {
          this.$emit('update:modelValue', `+${currentSymbol}`)
        }

        if (valueLength === 3) {
          this.$emit('update:modelValue', value.replace(/^(\+\d)(\d)/, '$1($2'))
        }

        if (valueLength === 7) {
          this.$emit('update:modelValue', value.replace(/^(.{6})/, '$1)'))
        }

        if (valueLength === 11) {
          this.$emit('update:modelValue', value.replace(/^(.{10})(.)/, '$1-$2'))
        }

        if (valueLength === 14) {
          this.$emit('update:modelValue', value.replace(/^(.{13})(.)/, '$1-$2'))
        }

        if (valueLength === 11 && !prevValue) {
          this.$emit(
            'update:modelValue',
            value.replace(/^(.)(.{3})(.{3})(.{2})(.{2})/, '+$1($2)$3-$4-$5'),
          )
        }

        if (valueLength >= 16) {
          this.$emit(
            'update:modelValue',
            value.replace(
              /^.*(\d).*(\d).*(\d).*(\d).*(\d).*(\d).*(\d).*(\d).*(\d).*(\d).*(\d)/,
              '+$1($2$3$4)$5$6$7-$8$9-$10$11',
            ),
          )
        }

        if (valueLength > 16) {
          this.$emit('update:modelValue', prevValue)
        }
      })
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
