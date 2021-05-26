<template>
    <div v-if="auth.isAuthenticated">
        <p class="text-white bg-green-300 text-center py-1">
            Progress: {{ progress }}%
        </p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapGetters(['progress']),
        ...mapState(['auth']),
    },
}
</script>
