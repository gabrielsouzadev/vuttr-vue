<template>
    <div class="modal">
        <div class="modal__title">
            <span class="title">Adicionar ferramenta</span>
            <span class="close" @click="$emit('close')"></span>
        </div>
        <div class="modal__container">
            <form class="form" v-on:submit.prevent="addTool">
                <div class="form__group">
                    <label class="label">Título</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Ex: Slack"
                        v-model="data.title"
                        v-validate="'required|alpha'"
                        :class="{'input': true, 'is-danger': errors.has('title') }"
                    >
                </div>
                <div class="form__group">
                    <label class="label">Link</label>
                    <input
                        type="text"
                        name="link"
                        placeholder="Ex: https://slack.com/"
                        v-model="data.link"
                        v-validate="'required|url'"
                        :class="{'input': true, 'is-danger': errors.has('link') }"
                    >
                </div>
                <div class="form__group">
                    <label class="label">Descrição</label>
                    <textarea
                        name="description"
                        rows="8"
                        cols="80"
                        placeholder="Ex: Uma plataforma de comunicação interna para sua empresa"
                        v-model="data.description"
                        v-validate="'required'"
                        :class="{'textarea': true, 'is-danger': errors.has('description') }"
                    >
                    </textarea>
                </div>
                <div class="form__group">
                    <label class="label">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        placeholder="Ex: nodejs, chat, communication, chatbot"
                        v-model="data.tags"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('tags') }"
                    >
                </div>
                <div class="form__group form__group--submit">
                    <button class="bt bt--error" @click="$emit('close')">Cancelar</button>
                    <button class="bt" type="submit">Adicionar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        data: {
            title: '',
            link: '',
            description: '',
            tags: ''
        }
    }),

    methods: {
        addTool() {
            this.$validator.validateAll()
                .then((result) => {
                    if (result) {
                        let tags = this.data.tags
                        tags = tags.replace(/\s/g, "").split(',')
                        this.data.tags = tags

                        this.$store.dispatch('tools/createTools', this.data)
                        this.$emit('close')
                    } else {
                        console.log(this.errors)
                    }
            })
        }
    }
}
</script>
