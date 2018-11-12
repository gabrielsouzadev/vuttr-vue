<template>
    <section class="tools-list">
        <div class="container">
            <div class="tools-list__row">
                <div class="tools-list__col">
                    <div class="form-group form-group--search">
                        <input class="input input--search" type="text" v-model="q" placeholder="Buscar por...">
                    </div>
                    <input type="checkbox" v-model="tags"> <p>Procurar apenas por tags</p>
                </div>
                <div class="tools-list__col">
                    <a class="bt" @click="addItem()">Adicionar</a>
                </div>
            </div>
            <div class="row">
                <ToolsListItem v-for="tool in tools" :key="tool.id" :tool="tool"/>
            </div>
        </div>
    </section>
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
            this.$modal.show(ToolsListItemAdd, {
                height: 'auto'
            })
        }
    },

    components: {
        ToolsListItem,
        ToolsListItemAdd
    }
}
</script>
