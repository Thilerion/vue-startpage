export default {
	state: {
		defaultBackground: require('@/assets/default_background.jpg'),
		useDefaultBackground: true,
		unsplashBaseUrl: "https://source.unsplash.com/collection/",
		unsplashCollections: [
			{ name: "", id: 220388 },
			{ name: "", id: 402 },
			{ name: "", id: 869015 },
			{ name: "", id: 420324 },
			{ name: "", id: 531563 },
			{ name: "", id: 334800 }
		],
		currentUnsplashCollection: 402,
		resolution: "1920x1080"
	},
	getters: {
		backgroundUrl: state => {
			if (state.useDefaultBackground === true) return state.defaultBackground;
			else {
				return `${state.unsplashBaseUrl}${state.currentUnsplashCollection}/${state.resolution}`;
			}
		}
	},
	mutations: {

	},
	actions: {

	}
}