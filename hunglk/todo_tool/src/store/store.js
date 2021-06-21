import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  // data trong vue
  state: {
    result: 10
  },
  // watch trong vue
  mutations: {

  },
  // method trong vue
  actions: {

  },
  // computed trong vue
  getters: {
    RESULT: state => {
      return state.result * 5;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCont: (state, getters) => {
      return getters.doneTodos.length;
    }
  }
})