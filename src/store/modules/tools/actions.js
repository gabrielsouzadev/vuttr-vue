import API from '@/api';
const toolService = new API();

const getTools = (context) => {
    toolService.getAllTools()
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
};

const searchTool = (context, data) => {
    toolService.searchTools(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
};

const searchTags = (context, data) => {
    toolService.searchToolsByTags(data)
        .then((response) => {
            context.commit('TOOLS_UPDATE', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
};

const deleteTools = (context, data) => {
    toolService.deleteTool(data)
        .catch((error) => {
            console.log(error);
        })
};

export default {
    getTools,
    searchTool,
    searchTags,
    deleteTools
};
