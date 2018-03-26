import { getTrueReducedWeatherResponse } from '@/api/weather-api';
import getLocation from '@/api/location-api';

const maxTime = 60 * 60 * 1000; //60 minutes until new weather should be retrieved

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
			console.warn("This is the getLocation action inside the weather store.");
			return new Promise((resolve, reject) => {
				if (getters.coords.latitude === null) {
					console.warn("Location unknown, so callign the getLocation function.");
					getLocation().then(pos => {
						console.warn("Location has been retrieved, so setting it now.");
						let posObj = { lat: pos.coords.latitude, long: pos.coords.longitude };
						commit('setLocation', posObj);
						resolve();
					});
				} else {
					console.warn("Location already known, so resolving.");
					resolve(getters.coords);
				}
			})			
		},
		getWeather({ commit, getters, dispatch }) {
			console.warn("Dispatch get location from the weather store.");
			dispatch('getLocation').then(() => {
				let coords = getters.coords;
				let newWeatherResponse = getTrueReducedWeatherResponse(coords);
				newWeatherResponse.then(function (res) {
					commit('setState', res);
				});
			});			
		}
	}
};
