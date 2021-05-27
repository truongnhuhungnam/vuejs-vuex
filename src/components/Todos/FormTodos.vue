<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" class="form-input w-1/3 mr-2" v-model="title" />
            <input
                type="submit"
                value="Add"
                class="text-white bg-green-400 px-5 py-2 border border-green-400 transition-all hover:bg-green-600 cursor-pointer"
            />
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit() {
            this.addTodo({
                title: this.title,
                completed: false,
            })
            this.title = ''
        },
    },
}
</script>
