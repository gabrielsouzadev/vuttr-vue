import API from '@/api'

const getTools = (context) => {
    API.getAllTools()
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const searchTool = (context, data) => {
    API.searchToolsByTitle(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const searchTags = (context, data) => {
    API.searchToolsByTags(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createTools = (context, data) => {
    return new Promise((resolve, reject) => {
        API.createTool(data)
            .then(() => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const deleteTools = (context, data) => {
    return new Promise((resolve, reject) => {
        API.deleteTool(data)
            .then(() => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default {
    getTools,
    searchTool,
    searchTags,
    createTools,
    deleteTools
}
