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
  },
  mutations: {
    ADD_PRODUCT: (state, { id, image, title, price, quantity }) => {
      // TODO: Реализовать мутацию добавления товара
      console.log(state.products)
      console.log(id, image, title, price, quantity)
    },
    REMOVE_PRODUCT: (state, id) => {
      const index = state.products.findIndex((item) => item.id === id)
      state.products.splice(index, 1)
    },
    SET_COUNT_PRODUCT: (state, { id, count }) => {
      const index = state.products.findIndex((item) => item.id === id)
      state.products[index].count += count
    },
  },
  getters: {
    getProducts: (state) => state.products,
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
  },
}
