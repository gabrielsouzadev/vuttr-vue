<template>
    <form class="form" v-on:submit.prevent="addTool">
        <div class="form__group">
            <label>Título</label>
            <input type="text" name="title" v-model="data.title" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('title') }">
        </div>
        <div class="form__group">
            <label>Link</label>
            <input type="text" name="link" v-model="data.link" v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('link') }">
        </div>
        <div class="form__group">
            <label>Descrição</label>
            <textarea name="description" rows="8" cols="80" v-model="data.description" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('description') }"></textarea>
        </div>
        <div class="form__group">
            <label>Tags</label>
            <input type="text" name="tags" v-model="data.tags" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('tags') }">
        </div>
        <div class="form__group">
            <div class="row row--right">
                <button class="bt bt--secondary" @click="$emit('close')">Cancelar</button>
                <button class="bt" type="submit">Adicionar</button>
            </div>
        </div>
    </form>
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
