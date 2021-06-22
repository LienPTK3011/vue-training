import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    forProduct: [
      {
        id: '0',
        name: 'Sp1',
        price: 40,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 1'
      },
      {
        id: '1',
        name: 'Sp2',
        price: 60,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 2'
      },
      {
        id: '2',
        name: 'Sp3',
        price: 80,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 3'
      },
      {
        id: '3',
        name: 'Sp4',
        price: 10,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 4'
      },
      {
        id: '4',
        name: 'Sp5',
        price: 10,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 4'
      },
      {
        id: '5',
        name: 'Sp6',
        price: 10,
        url:
          'https://kenh14cdn.com/thumb_w/660/2020/9/15/11963801839296277670535927754525774287441377n-1600162022002149207466.jpg',
        detail: 'Đây là sản phẩm số 4'
      }
    ],
    inCart: [],
  },
  getters: {
    forProduct: state => state.forProduct,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART (state, id) {
      //@ts-ignore
      state.inCart.push(id)
    },
    REMOVE_ITEM_CART (state, index) {
      state.inCart.splice(index, 1)
    }
  },
  actions: {
    addToCart (context, id) {
      context.commit('ADD_TO_CART', id)
    },
    removeFromCart (context, id) {
      context.commit('REMOVE_ITEM_CART', id)
    }
  },
  modules: {}
})
