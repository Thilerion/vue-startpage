import { DEBUGgetReducedWeatherResponse } from '@/api/weather-api';

export default {
	state: {
		latitude: null,
		longitude: null,
		retrievalDate: null,
		currentWeather: {},
		dailyWeather: []
	},
	getters: {
		weatherState: state => state
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
				commit('setState', res);
			});
		}
	}
};