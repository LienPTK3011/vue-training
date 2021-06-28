import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCT (state, products) {
      state.products = products
    },
    SET_PRODUCT_ID (state, product) {
      state.products = product
    },
    ADD_TO_CART (state, { product, qty }) {
      const productInCart = state.cart.find(item => {
        //@ts-ignore
        return item.product.id === product.id
      })
      if (productInCart) {
        //@ts-ignore
        productInCart.qty += qty
        return
      }
      state.cart.push({
        //@ts-ignore
        product,
        //@ts-ignore
        qty
      })
    },
    DELETE_PRODUCT_IN_CART (state, productId) {
      for (let i = 0; i < state.cart.length; i++) {
        //@ts-ignore
        if (state.cart[i].product.id === productId) {
          state.cart.splice(state.cart[i], 1)
        }
      }
    }
  },
  actions: {
    addTodo ({ commit }, newTodo) {
      commit('ADD_TODO', newTodo)
    },
    deleteTodo ({ commit }, todo) {
      commit('DELETE_TODO', todo)
    },
    getAllProduct ({ commit }) {
      axios.get('http://localhost:8993/api/client/getAllProduct').then(res => {
        commit('SET_PRODUCT', res.data)
      })
    },
    getById ({ commit }, productId) {
      axios
        .get(`http://localhost:8993/api/client/getById/${productId}`)
        .then(res => {
          commit('SET_PRODUCT_ID', res.data)
        })
    },
    addToCart ({ commit }, { product, qty }) {
      commit('ADD_TO_CART', { product, qty })
    },
    removeFromCart ({ commit }, productId) {
      commit('DELETE_PRODUCT_IN_CART', productId)
    }
  },
  modules: {},
  getters: {
    cartTotal (state) {
      let total = 0
      state.cart.forEach(item => {
        //@ts-ignore
        total += item.product.price * item.qty
      })
      return total
    }
  }
})
