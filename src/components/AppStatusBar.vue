<template>
    <div v-if="isAuthenticated" class="text-center">
        <p class="text-green-400 text-center text-2xl">List Task Done</p>
        <ul>
            <li v-for="todo in doneTodos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['doneTodos', 'isAuthenticated']),
    },
}
</script>
