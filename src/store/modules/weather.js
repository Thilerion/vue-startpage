import { getTrueReducedWeatherResponse, getRenewedTestResponse } from '@/api/weather-api';
import getLocation from '@/api/location-api';
import { saveToStorage, getFromStorage } from '@/api/localstorage';

const maxTime = 60 * 60 * 1000; //60 minutes until new weather should be retrieved
const useDebugTestResponse = true;

export default {
	state: {
		latitude: null,
		longitude: null,
		retrievalDate: null,
		currentWeather: {},
		dailyWeather: []
	},
	getters: {
		currentWeather: state => state.currentWeather,
		coords: state => {
			return {latitude: state.latitude, longitude: state.longitude}
		},
		weatherUpToDate: state => {
			return state.retrievalDate !== null && (Date.now() - state.retrievalDate) < maxTime;
		},
		dailyWeather: state => state.dailyWeather
	},
	mutations: {
		setState: (state, newState) => {
			for (let key in newState) {
				state[key] = newState[key];
			}
		},
		setLocation: (state, { lat, long }) => {
			state.latitude = lat;
			state.longitude = long;
		}
	},
	actions: {
		getLocation({commit, getters}) {
			return new Promise((resolve, reject) => {
				if (getters.coords.latitude === null) {
					getLocation().then(pos => {
						let posObj = { lat: pos.coords.latitude, long: pos.coords.longitude };
						commit('setLocation', posObj);
						resolve();
					});
				} else {
					resolve(getters.coords);
				}
			})			
		},
		getWeather({ commit, getters, dispatch, state }) {
			if (getters.weatherUpToDate === true) {
				return;
			}
			if (useDebugTestResponse === true) {
				console.warn("Weather not up to date, but 'useDebugTestResponse' is set to true, so retrieving %ctest weather response.", "font-weight:900;")
				dispatch('getTestWeather');
				return;
			}
			dispatch('getLocation').then(() => {
				let coords = getters.coords;
				let newWeatherResponse = getTrueReducedWeatherResponse(coords);
				newWeatherResponse.then(function (res) {
					commit('setState', res);
					saveToStorage("weather", state);
				});
			});			
		},
		loadWeatherFromStorage({commit}) {
			let stored = getFromStorage("weather");
			if (stored !== null && stored !== undefined) {
				commit('setState', stored);
			}
		},
		getTestWeather({commit}) {
			let testResponseState = getRenewedTestResponse();
			commit('setState', testResponseState);
		}
	}
};
