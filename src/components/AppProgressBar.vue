<template>
    <div>
        <p class="text-white bg-green-300 text-center py-1">
            Progress: {{ progress }}%
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['progress']),
    },
}
</script>
