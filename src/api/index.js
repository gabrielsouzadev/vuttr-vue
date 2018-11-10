import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

export default class Api {
    async getAllTools() {
        return await axios.get('/tools')
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async searchTools(q) {
        return await axios.get('/tools?q=' + q)
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async searchToolsByTags(tags) {
        return await axios.get('/tools?tags_like=' + tags)
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async createTool(payload) {
        return await axios.post('/tools', payload)
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async deleteTool(id) {
        return await axios.delete('/tools/' + id)
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.error(e)
            })
    }
}
