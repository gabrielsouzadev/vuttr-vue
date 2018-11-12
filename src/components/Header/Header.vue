<template>
    <header class="header">
        <div class="container">
            <h1 class="title">{{ title }}</h1>
            <h2 class="subtitle">{{ subtitle }}</h2>
        </div>
    </header>
</template>

<script>
import HeaderBar from './HeaderBar.vue'

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    },

    components: {
        HeaderBar
    }
}
</script>

<style lang="css">
</style>
