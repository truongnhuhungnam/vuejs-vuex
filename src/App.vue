<template>
    <div>
        <TheHeader />
        <div class="w-1/2 mx-auto py-6">
            <AppTodos />
            <AppStatusBar />
            <AppProgressBar />
        </div>
    </div>
</template>

<script>
import AppProgressBar from './components/AppProgressBar'
import AppStatusBar from './components/AppStatusBar'
import TheHeader from './components/TheHeader'
import AppTodos from './components/Todos/AppTodos'
export default {
    components: { AppTodos, TheHeader, AppStatusBar, AppProgressBar },
}
</script>
