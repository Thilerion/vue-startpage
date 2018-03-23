import { DEBUGgetReducedWeatherResponse } from '@/api/weather-api';

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
		}
	},
	mutations: {
		setState: (state, newState) => {
			for (let key in newState) {
				state[key] = newState[key];
			}
		}
	},
	actions: {
		DEBUGgetTestResponse({commit}) {
			DEBUGgetReducedWeatherResponse().then(function (res) {
				res.retrievalDate = Date.now();
				commit('setState', res);
			});
		}
	}
};