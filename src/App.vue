<template>
  <div id="app">
    <ToolsList/>
  </div>
</template>

<script>
import ToolsList from './components/Tools/ToolsList.vue'

export default {
    name: 'app',

    components: {
        ToolsList
    }
}
</script>

<style lang="scss">
    @import './assets/scss/theme.scss';
</style>
