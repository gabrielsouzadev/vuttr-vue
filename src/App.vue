<template>
  <div id="app">
    <Tools/>
  </div>
</template>

<script>
import Tools from './components/Tools.vue'

export default {
    name: 'app',

    components: {
        Tools
    }
}
</script>

<style lang="scss">
    @import './assets/scss/theme.scss';
</style>
