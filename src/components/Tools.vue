<template>
    <div class="container">
        <h1 class="title">VUTTR</h1>
        <h3 class="subtitle">Very Useful Tools to Remember</h3>

        <input class="input" type="text" v-model="q">
        <input type="checkbox" v-model="tags"> <p>Buscar apenas por tags</p>

        <ul>
            <li v-for="item in filterTools" :key="item.id">
                <a v-on:click="deleteTool(item.id, item.title)">
                    {{ item.title }}
                    {{ item.tags }}
                </a>
            </li>
        </ul>

        <div v-if="filterTools.length <= 0">
            <p>Sem resultados</p>
        </div>

        <v-dialog />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Tools',

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
            let _self = this;
            let tools = _self.tools;
            let q = _self.q;
            let tags = _self.tags;

            if (q && q != '') {
                if (!tags) {
                    tools = tools.filter((t) => {
                        return t['title'].includes(q)
                    })
                } else {
                    tools = tools.filter((t) => {
                        let foundTag = t.tags.findIndex((ts) => {
                            return ts === q;
                        })
                        return foundTag !== -1
                    })
                }
            }

            return tools
        }
    },

    methods: {
        deleteTool(id , title) {
            this.$modal.show('dialog', {
                title: 'Remover ferramenta',
                text: 'Você tem certeza que deseja remover a ferramenta ' + title,
                buttons: [{
                        title: 'Fechar'
                    },
                    {
                        title: 'Sim, remover',
                        handler: () => {
                            this.$store.dispatch('tools/deleteTools', id)
                            this.$modal.hide('dialog')
                            this.$store.dispatch('tools/getTools')
                        }
                    }
                ]
            })
        }
    }
}
</script>
