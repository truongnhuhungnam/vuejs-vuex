<template>
    <div class="">
        <p>Done</p>
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
        ...mapGetters(['doneTodos']),
    },
}
</script>
