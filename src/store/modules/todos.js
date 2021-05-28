import axios from 'axios'
const state = {
    todos: [],
}

const getters = {
    todos: state => state.todos,
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
        const doneTodos = getters.doneTodos
        return Math.round((doneTodos.length / state.todos.length) * 100)
    },
}
const actions = {
    async deleteTodo({ commit }, todoId) {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            )
            commit('DELETE_TODO', todoId)
        } catch (err) {
            console.log(err)
        }
    },
    async addTodo({ commit }, newTodo) {
        try {
            await axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                newTodo
            )
            commit('ADD_TODO', newTodo)
        } catch (err) {
            console.log(err)
        }
    },
    async getTodos({ commit }) {
        try {
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/?_limit=9'
            )
            commit('SET_TODOS', res.data)
        } catch (err) {
            console.log(err)
        }
    },
}
const mutations = {
    TOGGLE_COMPLETED(state, todoId) {
        state.todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
            return todo
        })
    },
    ADD_TODO(state, newTodo) {
        state.todos.unshift(newTodo)
    },

    DELETE_TODO(state, todoId) {
        state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    SET_TODOS(state, todos) {
        state.todos = todos
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
