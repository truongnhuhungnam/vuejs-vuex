<template>
    <div>
        <FormTodos v-if="isAuthenticated" />
        <ul v-if="isAuthenticated">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="border-2 border-purple-400 my-2 p-2 flex justify-between"
                :class="todo.completed ? 'bg-purple-300' : ''"
            >
                <label class="cursor-pointer">
                    <input
                        type="checkbox"
                        class="form-checkbox cursor-pointer text-purple-500 mr-2"
                        :checked="todo.completed"
                        @change="TOGGLE_COMPLETED(todo.id)"
                    />
                    <span :class="todo.completed ? 'text-white' : ''">{{
                        todo.title
                    }}</span>
                </label>
                <button
                    @click="deleteTodo(todo.id)"
                    class="text-white bg-red-400 px-3 py-1 transition-all hover:bg-red-600"
                >
                    Delete
                </button>
            </li>
        </ul>
        <p v-else class="text-2xl text-center">No authorised!</p>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import FormTodos from './FormTodos'
export default {
    components: { FormTodos },
    computed: {
        ...mapGetters(['todos', 'isAuthenticated']),
    },
    methods: {
        ...mapMutations(['TOGGLE_COMPLETED']),
        ...mapActions(['deleteTodo', 'getTodos']),
    },
    created() {
        this.getTodos()
    },
}
</script>
