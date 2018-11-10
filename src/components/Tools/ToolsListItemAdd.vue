<template>
    <div class="">
        <div class="form-group">
            <label class="label">Title</label>
            <input class="input" type="text" v-model="data.title">
        </div>
        <div class="form-group">
            <label class="label">Link</label>
            <input class="input" type="text" v-model="data.link">
        </div>
        <div class="form-group">
            <label class="label">Title</label>
            <input class="textarea" type="text" v-model="data.description">
        </div>
        <div class="form-group">
            <label class="label">Tags</label>
            <input class="input" type="text" v-model="data.tags">
        </div>
        <a class="bt"> Criar </a>
    </div>
</template>

<script>
export default {
    data: () => ({
        data: []
    }),

    computed: {

    },

    methods: {

    }
}
</script>
