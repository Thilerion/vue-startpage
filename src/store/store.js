import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import background from './modules/background';
import time from './modules/time';
import topsites from './modules/topsites';
import weather from './modules/weather';
import news from './modules/news';

import { saveToStorage, getFromStorage } from '@/api/localstorage';

export const store = new Vuex.Store({
	modules: {
		background,
		time,
		topsites,
		weather,
		news
	},
	state: {
		username: null,
		componentsEnabled: {
			topSites: true,
			time: true,
			welcome: true,
			weather: true,
			news: true
		},
		settingsOpen: false
	},
	getters: {
		username: state => state.username,
		componentsEnabled: state => state.componentsEnabled,
		settingsOpen: state => state.settingsOpen
	},
	mutations: {
		toggleSettingsOverlay: state => state.settingsOpen = !state.settingsOpen,
		setUsername: (state, username) => state.username = username,
		setComponentsEnabled: (state, componentsEnabled) => {
			state.componentsEnabled = Object.assign(state.componentsEnabled, componentsEnabled);
		},
		disableWeatherComponent: state => state.componentsEnabled.weather = false
	},
	actions: {
		saveSettings: ({ state, commit }, updated) => {
			commit('setUsername', updated.username);
			commit('setComponentsEnabled', updated.componentsEnabled);
			saveToStorage("username", state.username);
			saveToStorage("componentsEnabled", JSON.stringify(state.componentsEnabled));
		},
		loadSettings: ({ commit }) => {
			let storedName = getFromStorage("username");
			if (storedName !== null && storedName !== undefined) {
				commit('setUsername', storedName);
			}
			let storedCompsEnabled = getFromStorage("componentsEnabled");
			if (storedCompsEnabled !== null && storedCompsEnabled !== undefined) {
				commit('setComponentsEnabled', JSON.parse(storedCompsEnabled));
			}
		}
	}
});

store.dispatch('loadSettings');


