<template>
    <div class="tools-list-item">
        <a class="tools-list-item__title" v-bind:href="tool.link" target="_blank">{{ tool.title }}</a>
        <p class="tools-list-item__description">{{ tool.description }}</p>
        <div class="tools-list-item__tags">
            <b class="tools-list-item__tags__item" v-for="tag in tool.tags" :key="tag">
                #{{ tag }}
            </b>
        </div>
        <button class="tools-list-item__delete" @click="deleteItem(tool.id, tool.title)">{{ $t("platform.remove") }}</button>
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
