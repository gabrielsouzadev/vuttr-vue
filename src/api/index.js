import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

/*
 * Buscar todas as ferramentas
 * @return {array}
 */
async function getAllTools() {
    return await axios.get('/tools')
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.error('getAllTools: ', err)
        })
}

/**
 * Filtrar ferramentas pelo nome
 * @param {string} query Titulo da ferramenta
 * @return {array}
 */
async function searchToolsByTitle(query) {
    return await axios.get('/tools', {
        params: {
            q: query
        }
    })
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.error('getAllTools: ', err)
    })
}

/**
 * Filtrar ferramentas por tags
 * @param {string} tags Tags da ferramenta
 * @return {array}
 */
async function searchToolsByTags(tags) {
    return await axios.get('/tools', {
        params : {
            tags_like: tags
        }
    })
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.error('searchToolsByTags: ', err)
    })
}

/*
 * Criar uma ferramenta
 * @param {array} tool Objeto da ferramenta
 * @return {boolean}
 */
async function createTool(tool) {
    return await axios.post('/tools', tool)
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.error('createTool: ', err)
        })
}

/*
 * Deletar ferramenta por id
 * @param {integer} id Id da ferramenta
 * @return {boolean}
 */
async function deleteTool(id) {
    return await axios.delete('/tools/' + id)
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.error('deleteTool: ', err)
        })
}

export default {
    getAllTools,
    searchToolsByTitle,
    searchToolsByTags,
    createTool,
    deleteTool
}
