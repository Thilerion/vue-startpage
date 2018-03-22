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
		timeDisplay: state => state.currentTime.format(state.timeFormat)
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
			console.log("Starting time interval.");
			let interval = setInterval(() => {
				commit('setCurrentTime');
			}, 1000);
			commit('setIntervalId', interval);
		},
		stopInterval: ({ commit }) => {
			console.log("Clearing interval.");
			commit('clearInterval');
		}
	}
}