import moment from 'moment';
moment.locale('nl');

export default {
	state: {
		timeFormat: "LT",
		dateFormat: "LL",
		currentTime: moment(),
		intervalId: null
	},
	getters: {
		timeDisplay: state => state.currentTime.format(state.timeFormat),
		timeOfDay: state => {
			let hour = state.currentTime.hour();
			if (hour >= 18 || hour < 5) return 2;
			else if (hour >= 5 && hour < 12) return 0;
			else if (hour >= 12 && hour < 18) return 1;
		}
	},
	mutations: {
		setCurrentTime: state => state.currentTime = moment(),
		setIntervalId: (state, intervalId) => state.intervalId = intervalId,
		clearInterval: state => {
			clearInterval(state.intervalId);
			state.intervalId = null;
		}
	},
	actions: {
		initializeTime: ({commit, dispatch}) => {
			commit('setCurrentTime');
			dispatch('startInterval');
		},
		startInterval: ({commit}) => {
			let interval = setInterval(() => {
				commit('setCurrentTime');
			}, 5000);
			commit('setIntervalId', interval);
		},
		stopInterval: ({ commit }) => {
			commit('clearInterval');
		}
	}
}