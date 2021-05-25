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
export default {
    computed: {
        doneTodos() {
            return this.$store.state.todos.filter(todo => todo.completed)
        },
    },
}
</script>
