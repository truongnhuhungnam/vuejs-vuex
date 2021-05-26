<template>
    <div>
        <ul v-if="auth.isAuthenticated">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="border-2 border-purple-400 my-2 p-2"
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
            </li>
        </ul>
        <p v-else class="text-2xl text-center">No authorised!</p>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['todos', 'auth']),
    },
    methods: {
        ...mapMutations(['TOGGLE_COMPLETED']),
    },
}
</script>
