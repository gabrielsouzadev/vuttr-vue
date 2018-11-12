<template>
    <div class="tools-list__item">
        <h2 v-bind:href="tool.link" class="tools-list__item__title" target="_blank">{{ tool.title }}</h2>
        <p class="tools-list__item__description">{{ tool.description }}</p>

        <div class="tools-list__tags">
            <b class="tools-list__tags__item" v-for="tag in tool.tags" :key="tag">
                #{{ tag }}
            </b>
        </div>
        <a @click="deleteItem(tool.id, tool.title)">Remover</a>
    </div>
</template>

<script>
import ToolsListItemDelete from './ToolsListItemDelete';

export default {
    components: {
        ToolsListItemDelete
    },

    props: {
        tool: {
            type: Object,
            required: true
        }
    },

    methods: {
        deleteItem(id, title) {
            this.$modal.show(ToolsListItemDelete, {
                id: id,
                title: title
            }, {
                height: 'auto'
            })
        }
    }
}
</script>
