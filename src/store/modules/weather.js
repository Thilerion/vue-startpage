import { DEBUGgetReducedWeatherResponse } from '@/api/weather-api';
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
		DEBUGgetTestResponse({commit}) {
			DEBUGgetReducedWeatherResponse().then(function (res) {
				res.retrievalDate = Date.now();
				commit('setState', res);
			});
		},
		getLocation({commit}) {
			getLocation().then(pos => {
				let posObj = { lat: pos.coords.latitude, long: pos.coords.longitude };
				commit('setLocation', posObj);
			});
		}
	}
};
