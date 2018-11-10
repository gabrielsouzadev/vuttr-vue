import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    tools: [],
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};


