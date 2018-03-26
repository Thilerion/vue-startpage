import { getTrueReducedWeatherResponse, getRenewedTestResponse } from '@/api/weather-api';
import getLocation from '@/api/location-api';
import { saveToStorage, getFromStorage } from '@/api/localstorage';

const maxTime = 2 * (60 * 60 * 1000); //2 hours until new weather should be retrieved
const useDebugTestResponse = false;

export default {
	state: {
		weather: {
			latitude: null,
			longitude: null,
			retrievalDate: null,
			currentWeather: {},
			dailyWeather: []
		},
		weatherError: false
	},
	getters: {
		currentWeather: state => state.weather.currentWeather,
		coords: state => {
			return {latitude: state.weather.latitude, longitude: state.weather.longitude}
		},
		weatherUpToDate: state => {
			return state.weather.retrievalDate !== null && (Date.now() - state.weather.retrievalDate) < maxTime;
		},
		dailyWeather: state => state.weather.dailyWeather,
		weatherError: state => state.weatherError
	},
	mutations: {
		setState: (state, newState) => {
			for (let key in newState) {
				state.weather[key] = newState[key];
			}
		},
		setLocation: (state, { lat, long }) => {
			state.weather.latitude = lat;
			state.weather.longitude = long;
		},
		setWeatherRetrievalError: state => state.weatherError = true
	},
	actions: {
		getLocation({commit, getters}) {
			return new Promise((resolve, reject) => {
				if (getters.coords.latitude === null) {
					getLocation().then(pos => {
						let posObj = { lat: pos.coords.latitude, long: pos.coords.longitude };
						commit('setLocation', posObj);
						resolve();
					})
					.catch(function (err) {
						reject(err);	
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
					saveToStorage("weather", state.weather);
				});
			})
			.catch(function (err) {
				console.warn(err);
				commit('setWeatherRetrievalError');
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
