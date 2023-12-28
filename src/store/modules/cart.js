export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 4,
        image: '/uploads/images/004.png',
        title:
          'Ноутбук Apple MacBook Air 15" M2/8Gb/256Gb Midnight (MQKW3ZP/A)',
        price: 179999,
        quantity: 7,
        count: 1,
      },
    ],
    isCheckoutPreview: true,
  },
  mutations: {
    ADD_PRODUCT: (state, { id, image, title, price, quantity, count }) => {
      state.products.push({ id, image, title, price, quantity, count })
    },
    REMOVE_PRODUCT: (state, id) => {
      const index = state.products.findIndex((i) => i.id === id)
      state.products.splice(index, 1)
    },
    SET_COUNT_PRODUCT: (state, { id, count }) => {
      const index = state.products.findIndex((i) => i.id === id)
      state.products[index].count += count
    },
    SET_IS_CHECKOUT_PREVIEW: (state, isPreview) => {
      state.isCheckoutPreview = isPreview
    },
    CLEAR_CART: (state) => {
      state.products.splice(0, state.products.length)
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getIsInCart: (state) => (id) => state.products.some((i) => i.id === id),
    getAmount: (state) =>
      state.products.reduce((acc, i) => acc + i.count * i.price, 0),
    getCount: (state) => state.products.reduce((acc, i) => acc + i.count, 0),
    getIsCheckoutPreview: (state) => state.isCheckoutPreview,
  },
  actions: {
    addProduct({ commit }, { id, image, title, price, quantity }) {
      commit('ADD_PRODUCT', { id, image, title, price, quantity, count: 1 })
    },
    removeProduct({ commit }, id) {
      commit('REMOVE_PRODUCT', id)
    },
    setCountProduct({ commit }, { id, count }) {
      commit('SET_COUNT_PRODUCT', { id, count })
    },
    setIsCheckoutPreview({ commit }, isPreview) {
      commit('SET_IS_CHECKOUT_PREVIEW', isPreview)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
  },
}
