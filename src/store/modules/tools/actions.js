import API from '@/api';

const getTools = (context) => {
    API.getAllTools()
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((err) => {
            console.log(err);
        })
};

const searchTool = (context, data) => {
    API.searchToolsByTitle(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((err) => {
            console.log(err);
        })
};

const searchTags = (context, data) => {
    API.searchToolsByTags(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((err) => {
            console.log(err);
        })
};

const deleteTools = (context, data) => {
    API.deleteTool(data)
        .then(() => {
            API.getAllTools()
                .then((response) => {
                    context.commit('TOOLS_UPDATE', response.data);
                })
        })
        .catch((err) => {
            console.log(err);
        })
};

export default {
    getTools,
    searchTool,
    searchTags,
    deleteTools
};
