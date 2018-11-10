<template>
    <div class="tools-list">
        <input class="input" type="text" v-model="q">
        <input type="checkbox" v-model="tags"> <p>Buscar apenas por tags</p>

        <a class="bt" @click="addItem()">Adicionar</a>

        <ToolsListItem v-for="tool in tools" :key="tool.id" :tool="tool"/>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ToolsListItem from './ToolsListItem.vue'
import ToolsListItemAdd from './ToolsListItemAdd'

export default {
    data: () => ({
        q: null,
        tags: null,
    }),

    mounted() {
        this.$store.dispatch('tools/getTools')
    },

    computed: {
        ...mapGetters({
            tools: 'tools/tools'
        })
    },

    watch: {
        q() {
            this.fetch()
        }
    },

    methods: {
        fetch() {
            let searchType = this.tags ? 'Tags' : 'Tool'
            let keywords = this.q.replace(/\s/g,'')

            if(keywords) {
                setTimeout(() => {
                    this.$store.dispatch('tools/search' + searchType, keywords)
                }, 150)
            } else {
                this.$store.dispatch('tools/getTools')
            }
        },
        addItem() {
            this.$modal.show(ToolsListItemAdd)
        }
    },

    components: {
        ToolsListItem,
        ToolsListItemAdd
    }
}
</script>
