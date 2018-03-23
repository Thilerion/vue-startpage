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
		username: "Michael",
		componentsEnabled: {
			topSites: false,
			time: true,
			welcome: true,
			weather: true
		}
	},
	getters: {
		username: state => state.username,
		componentsEnabled: state => state.componentsEnabled
	},
	mutations: {

	},
	actions: {

	}
});
