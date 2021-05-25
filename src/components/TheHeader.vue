<template>
    <div class="bg-purple-300">
        <div class="container mx-auto">
            <h1 class="text-white text-2xl text-center">Vuejs2 Vuex</h1>
            <ul class="flex justify-center">
                <li>
                    <a
                        href="/"
                        class="text-white text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        href="/about"
                        class="text-white text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                        >About</a
                    >
                </li>
                <li
                    class="text-white text-lg inline-block px-4 py-2"
                    v-if="auth.isAuthenticated"
                >
                    Total todos: {{ todos.length }}
                    <button class="text-white">Logout</button>
                </li>
                <li
                    v-else
                    class="text-white text-lg inline-block px-4 py-2 hover:bg-purple-500 transition-all"
                >
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
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
