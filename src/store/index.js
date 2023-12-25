import { createStore } from 'vuex'
import catalog from './modules/catalog'
import favorites from './modules/favorites'
import cart from './modules/cart'

export default createStore({
  modules: {
    catalog,
    favorites,
    cart,
  },
})
