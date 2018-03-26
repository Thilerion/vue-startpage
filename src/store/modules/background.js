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
		resolution: {
			width: window.screen.width,
			height: window.screen.height
		}
	},
	getters: {
		backgroundUrl: state => {
			if (state.useDefaultBackground === true) return state.defaultBackground;
			else {
				return `${state.unsplashBaseUrl}${state.currentUnsplashCollection}/${state.resolution.width}x${state.resolution.height}`;
			}
		}
	},
	mutations: {

	},
	actions: {

	}
}