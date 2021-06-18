import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, name: 'Rua bat', isCompleted: false },
      { id: 2, name: 'Lau nha', isCompleted: false },
      { id: 3, name: 'Giat quan ao', isCompleted: false },
    ]
  },
  getters: {
    todos: state => {
      return state.todos
    },
    todoIsCompleted: state => {
      return state.todos.filter(todo => todo.isCompleted).length
    },
    percent: state => {
      const todoCompleted = state.todos.filter(todo => todo.isCompleted).length
      const todoTotal = state.todos.length

      return Math.round((todoCompleted / todoTotal) * 100)
    },
    lengthTodo: state => {
      return state.todos.length
    },
    lastElementId: state => {
      let max = 0
      state.todos.forEach((todo) => {
        if (todo.id > max) {
          max = todo.id
        }
      })
      return max
    }
  },
  mutations: {
    checkedTodo(state, id) {
      return state.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.isCompleted = !todo.isCompleted
        }
      })
    },
    deleteTodo(state, key) {
      return state.todos.forEach((todo, i) => {
        if (i == key) {
          state.todos.splice(i, 1)
        }
      })
    },
    add(state, todo) {
      return state.todos.push(todo)
    }
  },
  actions: {
    add(store, todo) {
      store.commit('add', todo)
    },
    deleteTodo(store, i) {
      store.commit('deleteTodo', i)
    },
    checkedTodo(store, i) {
      store.commit('checkedTodo', i)
    }
  },
  modules: {
    
  }
})