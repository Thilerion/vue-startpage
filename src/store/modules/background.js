export default {
	state: {
		defaultBackground: require('@/assets/default_background.jpg'),
		useDefaultBackground: false,
		//externalBackground: "https://source.unsplash.com/collection/220388/1920x1080"
		//externalBackground: "https://source.unsplash.com/collection/402/1920x1080"
		//externalBackground: "https://source.unsplash.com/collection/869015/1920x1080"
		//externalBackground: "https://source.unsplash.com/collection/420324/1920x1080"
		//externalBackground: "https://source.unsplash.com/collection/531563/1920x1080"
		externalBackground: "https://source.unsplash.com/collection/334800/1920x1080"
	},
	getters: {
		backgroundUrl: state => {
			if (state.useDefaultBackground === true) return state.defaultBackground;
			else return state.externalBackground;
		}
	},
	mutations: {

	},
	actions: {

	}
}