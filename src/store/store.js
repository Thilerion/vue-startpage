import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import background from './modules/background';
import time from './modules/time';

export default new Vuex.Store({
	modules: {
		background,
		time
	},
	state: {
		
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
});
