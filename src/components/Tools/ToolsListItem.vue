<template>
    <div class="tools-list__item">
        <a v-bind:href="tool.link" class="tools-list__item__title" target="_blank">{{ tool.title }}</a>
        <p class="tools-list__item__description">{{ tool.description }}</p>

        <div class="tools-list__tags">
            <span class="tools-list__tags__item" v-for="tag in tool.tags" :key="tag">
                #{{ tag }}
            </span>
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
            })
        }
    }
}
</script>
