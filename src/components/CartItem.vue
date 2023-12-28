<script>
import { mapActions } from 'vuex'
import ThePrice from '@/components/ThePrice.vue'
import IconButton from '@/components/IconButton.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconMinusCircle from '@/components/icons/IconMinusCircle.vue'
import IconPlusCircle from '@/components/icons/IconPlusCircle.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'

export default {
  name: 'CartItem',
  components: {
    ThePrice,
    IconButton,
    IconTrash,
    IconMinusCircle,
    IconPlusCircle,
    FavoriteButton,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions({
      setCountProduct: 'cart/setCountProduct',
      removeProduct: 'cart/removeProduct',
    }),
  },
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="image" width="64" height="64" :alt="title" />
    </div>
    <div class="cart-item__title">{{ title }}</div>
    <div class="cart-item__price">
      <ThePrice :amount="price" />
    </div>
    <div class="cart-item__count">
      <IconButton
        :color="count === 1 ? 'shade' : 'primary'"
        @click="setCountProduct({ id, count: count <= 1 ? 0 : -1 })"
      >
        <IconMinusCircle />
      </IconButton>

      {{ count }}

      <IconButton
        :color="count === quantity ? 'shade' : 'primary'"
        @click="setCountProduct({ id, count: count >= quantity ? 0 : 1 })"
      >
        <IconPlusCircle />
      </IconButton>
    </div>
    <FavoriteButton
      class="cart-item__favorite"
      :id="id"
      :image="image"
      :title="title"
    />
    <IconButton
      class="cart-item__trash"
      color="primary"
      @click="removeProduct(id)"
    >
      <IconTrash />
    </IconButton>
  </div>
</template>

<style>
.cart-item {
  display: grid;
  grid-template-columns: 64px repeat(2, 1fr) 24px;
  grid-template-rows: repeat(2, min-content);
  gap: 8px 24px;
}

.cart-item__image {
  grid-area: 1 / 1 / 3 / 2;
}

.cart-item__title {
  grid-area: 1 / 2 / 2 / 4;
  font-size: 14px;
  line-height: 24px;
}

.cart-item__price {
  grid-area: 2 / 2 / 3 / 3;
}

.cart-item__count {
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

.cart-item__favorite {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: start;
}

.cart-item__trash {
  grid-area: 2 / 4 / 3 / 5;
  display: flex;
  align-items: start;
}
</style>
