<template>
    <section class="tools-list">
        <div class="tools-list__container">
            <div class="tools-list__filter">
                <div class="tools-list__filter__search">
                    <input class="input input--search" type="text" v-model="q" placeholder="Buscar...">
                    <label class="checkbox">
                        <input type="checkbox" v-model="tags"/>
                        <span></span>
                        <p class="text">{{ $t("filter.tags") }}</p>
                    </label>
                </div>
                <div class="tools-list__filter__add">
                    <button class="bt" @click="addItem()">{{ $t("platform.add") }}</button>
                </div>
            </div>
            <div class="tools-list__items">
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
        }),
        filterTools() {
            return `${this.q}|${this.tags}`
        }
    },

    watch: {
        filterTools() {
            this.fetchTools()
        }
    },

    methods: {
        fetchTools() {
            if(this.q && this.q != '') {
                let searchType = this.tags ? 'Tags' : 'Tool'
                let keywords = this.q.replace(/\s/g,'')

                if(keywords) {
                    setTimeout(() => {
                        this.$store.dispatch('tools/search' + searchType, keywords)
                    }, 150)
                }
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
