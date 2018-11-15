<template>
    <div id="app">
        <Header :title="title" :subtitle="subtitle"/>
        <ToolsList />
        <notifications group="notification"/>
    </div>
</template>

<script>
import ToolsList from './components/Tools/ToolsList.vue'
import Header from './components/Header/Header.vue'

export default {
    name: 'app',

    data: () => ({
        title: 'VUTTR',
        subtitle: 'Very Useful Tools to Remember',
    }),

    components: {
        ToolsList,
        Header
    }
}
</script>

<style lang="scss">
@import './assets/scss/theme.scss';
</style>
