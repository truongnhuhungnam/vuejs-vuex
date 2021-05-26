<template>
    <div v-if="auth.isAuthenticated" class="text-center">
        <p>List Task Done</p>
        <ul>
            <li v-for="todo in doneTodos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapGetters(['doneTodos']),
        ...mapState(['auth']),
    },
}
</script>
