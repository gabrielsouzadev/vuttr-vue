<template>
    <div class="modal">
        <div class="modal__title">
            <span class="title">{{ $t("modals.removeTool.title") }}</span>
            <span class="close" @click="$emit('close')"></span>
        </div>
        <div class="modal__container">
            <i18n path="modals.removeTool.body" tag="p">
                <b place="title">{{ title }}</b>
            </i18n>
        </div>
        <div class="modal__footer">
            <button class="bt bt--error" @click="$emit('close')">{{ $t("platform.cancel") }}</button>
            <button class="bt" v-on:click="deleteTool(id)">{{ $t("platform.remove") }}</button>
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
