import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [],
        auth: {
            isAuthenticated: false,
        },
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed),
        progress: (state, getters) => {
            const doneTodos = getters.doneTodos
            return Math.round((doneTodos.length / state.todos.length) * 100)
        },
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
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
    },
    actions: {
        async deleteTodo({ commit }, todoId) {
            try {
                await axios.delete(
                    `https://60a8d18120a6410017306479.mockapi.io/todos/${todoId}`
                )
                commit('DELETE_TODO', todoId)
            } catch (err) {
                console.log(err)
            }
        },
        async addTodo({ commit }, newTodo) {
            try {
                await axios.post(
                    'https://60a8d18120a6410017306479.mockapi.io/todos',
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
                    'https://60a8d18120a6410017306479.mockapi.io/todos'
                )
                commit('SET_TODOS', res.data)
            } catch (err) {
                console.log(err)
            }
        },
    },
}

const store = new Vuex.Store(storeData)

export default store
