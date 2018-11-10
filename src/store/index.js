import Vue from 'vue';
import Vuex from 'vuex';
import toolsModule from './modules/tools';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tools: toolsModule,
  },
});
