// State
export const state = () => ({
    todos: [
        { id: 1, name: 'Mây của trời', isCompleted: false },
        { id: 2, name: 'Cứ để gió cuốn đi', isCompleted: false },
        { id: 3, name: ':( ...', isCompleted: false },
    ]
})

// Getter
export const getters = {
    allTodo: state => {
        return state.todos
    },
    lastIdTodo: state => {
        let max = 0
        state.todos.forEach((todo) => {
            if (todo.id > max) {
                max = todo.id
            }
        })
        return max
    }
}

// Actions
export const actions = {
    checkedComplete(store, id) {
        store.commit('checkedComplete', id)
    },
    addTodo(store, todo) {
        store.commit('addTodo', todo)
    },
    deleteTodo(store, key) {
        store.commit('deleteTodo', key)
    }
}

// Mutations
export const mutations = {
    checkedComplete(state, id) {
        return state.todos.forEach((todo) => {
            if (todo.id == id) {
                todo.isCompleted = !todo.isCompleted
            }
        })
    },
    addTodo(state, todo) {
        state.todos.push(todo)
    },
    deleteTodo(state, key) {
        state.todos.splice(key, 1)
    }
}