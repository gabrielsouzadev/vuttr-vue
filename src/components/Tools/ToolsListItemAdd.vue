<template>
    <div class="modal">
        <div class="modal__title">
            <span class="title">{{ $t("modals.addTool.title") }}</span>
            <span class="close" @click="$emit('close')"></span>
        </div>
        <div class="modal__container">
            <form class="form" v-on:submit.prevent="addTool">
                <div :class="{'form__group': true, 'form__group--error': errors.has('link') }">
                    <label class="label">{{ $t("forms.title") }}</label>
                    <input
                        type="text"
                        name="title"
                        class="input"
                        placeholder="Ex: Slack"
                        v-model="data.title"
                        v-validate="'required|alpha'"
                    >
                    <div class="error">
                        <span class="text">{{ $t("forms.errors.title") }}</span>
                    </div>
                </div>
                <div :class="{'form__group': true, 'form__group--error': errors.has('link') }">
                    <label class="label">{{ $t("forms.link") }}</label>
                    <input
                        type="text"
                        name="link"
                        class="input"
                        placeholder="Ex: https://slack.com/"
                        v-model="data.link"
                        v-validate="'required|url'"
                    >
                    <div class="error">
                        <span class="text">{{ $t("forms.errors.link") }}</span>
                    </div>
                </div>
                <div :class="{'form__group': true, 'form__group--error': errors.has('description') }">
                    <label class="label">{{ $t("forms.description") }}</label>
                    <textarea
                        name="description"
                        rows="8"
                        cols="80"
                        class="textarea"
                        placeholder="Ex: Uma plataforma de comunicação interna para sua empresa"
                        v-model="data.description"
                        v-validate="'required'"
                    >
                    </textarea>
                    <div class="error">
                        <span class="text">{{ $t("forms.errors.description") }}</span>
                    </div>
                </div>
                <div :class="{'form__group': true, 'form__group--error': errors.has('tags') }">
                    <label class="label">{{ $t("forms.tags") }}</label>
                    <input
                        type="text"
                        name="tags"
                        class="input"
                        placeholder="Ex: nodejs, chat, communication, chatbot"
                        v-model="data.tags"
                        v-validate="'required'"
                    >
                    <div class="error">
                        <span class="text">{{ $t("forms.errors.tags") }}</span>
                    </div>
                </div>
                <div class="form__group form__group--submit">
                    <button class="bt bt--error" @click="$emit('close')">{{ $t("platform.cancel") }}</button>
                    <button class="bt" type="submit">{{ $t("platform.add") }}</button>
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
