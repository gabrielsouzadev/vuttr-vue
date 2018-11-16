<template>
    <div class="tools-list-item">
        <a class="tools-list-item__title" v-bind:href="tool.link" target="_blank">{{ tool.title }}</a>
        <p class="tools-list-item__description">{{ tool.description }}</p>
        <div class="tools-list-item__tags">
            <b class="tools-list-item__tags__item" v-for="tag in tool.tags" :key="tag">
                <b v-html="highlight(tag)"></b>
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
        },
        highlight(tag) {
            let parentTags = this.$parent.tags
            let parentQuery = this.$parent.q

            if(parentTags && parentQuery) {
                let iQuery = new RegExp(parentQuery, 'ig')

                tag = tag.toString().replace(iQuery, function(matchedTxt){
                    return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
                })
            }

            return '#' + tag
        }
    }
}
</script>
