<template>
    <div v-if="isAuthenticated">
        <p class="text-white bg-green-400 text-center py-1">
            Progress: {{ progress }}%
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['todos', 'progress', 'isAuthenticated']),
    },
}
</script>
