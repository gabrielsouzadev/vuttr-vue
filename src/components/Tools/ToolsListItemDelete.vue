<template>
    <div class="tools-list__item__delete">
        Você tem certeza que deseja remover a ferramenta {{ title }} ?
        <span v-on:click="deleteTool(id)">Sim</span>
        <span @click="$emit('close')">Cancelar</span>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },

    methods: {
        deleteTool(id) {
            this.$store.dispatch('tools/deleteTools', id)
            this.$emit('close')
        }
    }
}
</script>
