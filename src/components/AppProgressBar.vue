<template>
    <div>
        <p class="text-white bg-green-300 text-center py-1">
            Progress: {{ progress }}%
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        progress() {
            return Math.round(
                (this.$store.state.todos.filter(todo => todo.completed).length /
                    this.$store.state.todos.length) *
                    100
            )
        },
    },
}
</script>
