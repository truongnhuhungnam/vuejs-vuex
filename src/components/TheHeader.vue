<template>
    <div class="bg-purple-300">
        <div class="container mx-auto">
            <h1 class="text-white text-2xl text-center">Vuejs2 Vuex</h1>
            <ul class="flex justify-center text-white">
                <li>
                    <a
                        href="/"
                        class="text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        href="/about"
                        class="text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                        >About</a
                    >
                </li>
                <li
                    class="text-lg inline-block px-4 py-2"
                    v-if="isAuthenticated"
                >
                    Total todos: {{ todos.length }}
                    <a href="javascript:void(0);" @click="TOGGLE_AUTH"
                        >Logout</a
                    >
                </li>
                <li
                    v-else
                    class="text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                >
                    <a href="javascript:void(0);" @click="TOGGLE_AUTH">Login</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['todos', 'isAuthenticated']),
    },
    methods: {
        ...mapMutations(['TOGGLE_AUTH']),
    },
}
</script>
