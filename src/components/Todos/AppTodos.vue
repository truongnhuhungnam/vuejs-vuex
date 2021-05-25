<template>
    <div>
        <ul v-if="auth.isAuthenticated">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="border-2 border-purple-400 my-2 p-2"
            >
                {{ todo.title }}
            </li>
        </ul>
        <p v-else class="text-2xl text-center">No authorised!</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['todos', 'auth']),
    },
}
</script>
