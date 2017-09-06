import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const state = {
	x : 1
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})