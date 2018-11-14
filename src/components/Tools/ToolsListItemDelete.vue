<template>
    <div class="modal">
        <div class="modal__title">
            <span class="title">Remover ferramenta</span>
            <span class="close" @click="$emit('close')"></span>
        </div>
        <div class="modal__container">
            Você tem certeza que deseja remover a ferramenta {{ title }} ?
        </div>
        <div class="modal__footer">
            <button class="bt bt--error" @click="$emit('close')">Cancelar</button>
            <button class="bt" v-on:click="deleteTool(id)">Remover</button>
        </div>
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
