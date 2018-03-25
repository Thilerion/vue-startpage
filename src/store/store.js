import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import background from './modules/background';
import time from './modules/time';
import topsites from './modules/topsites';
import weather from './modules/weather';

export default new Vuex.Store({
	modules: {
		background,
		time,
		topsites,
		weather
	},
	state: {
		username: "Michael",
		componentsEnabled: {
			topSites: true,
			time: true,
			welcome: true,
			weather: true
		},
		settingsOpen: true
	},
	getters: {
		username: state => state.username,
		componentsEnabled: state => state.componentsEnabled,
		settingsOpen: state => state.settingsOpen
	},
	mutations: {
		toggleSettingsOverlay: state => state.settingsOpen = !state.settingsOpen,
		saveSettings: (state, updated) => {
			state.username = updated.username;
		}
	},
	actions: {

	}
});
