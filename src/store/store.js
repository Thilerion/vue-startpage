import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import background from './modules/background';
import time from './modules/time';
import topsites from './modules/topsites';

export default new Vuex.Store({
	modules: {
		background,
		time,
		topsites
	},
	state: {
		username: "Michael"
	},
	getters: {
		username: state => state.username
	},
	mutations: {

	},
	actions: {

	}
});
