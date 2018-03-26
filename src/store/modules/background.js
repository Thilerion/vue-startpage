import { saveToStorage, getFromStorage } from '@/api/localstorage';

export default {
	state: {
		defaultBackground: require('@/assets/default_background.jpg'),
		useDefaultBackground: false,
		unsplashBaseUrl: "https://source.unsplash.com/collection/",
		unsplashCollections: [
			{ name: "MacOS Desktop Wallpapers", subtitle: "My favourite desktop wallpapers for MacOS", id: 220388 },
			{ name: "Desktop Wallpapers", subtitle: "The ultimate wallpaper collection", id: 402 },
			{ name: "FLOOD", subtitle: "Water. Ocean. Falls.", id: 869015 },
			{ name: "Blurrrr", subtitle: "Focus can be so overrated. Sometimes the blurrier the better.", id: 420324 },
			{ name: "Pastel & Pale", subtitle: "", id: 531563 },
			{ name: "Reflections", subtitle: "", id: 334800 }
		],
		currentUnsplashCollection: 1,
		resolution: {
			width: Math.max(window.screen.width, 1366),
			height: Math.max(window.screen.height, 768)
		}
	},
	getters: {
		backgroundUrl: state => {
			if (state.useDefaultBackground === true) return state.defaultBackground;
			else {
				let unsplashId = state.unsplashCollections[state.currentUnsplashCollection].id;
				return `${state.unsplashBaseUrl}${unsplashId}/${state.resolution.width}x${state.resolution.height}`;
			}
		},
		currentUnsplashCollection: state => state.currentUnsplashCollection,
		possibleUnsplashCollections: state => state.unsplashCollections
	},
	mutations: {
		setBackgroundId: (state, index) => state.currentUnsplashCollection = index
	},
	actions: {
		saveBackgroundSettings({commit}, index) {
			commit("setBackgroundId", index);
			saveToStorage("backgroundId", index);
		},
		loadBackgroundSettings({commit}) {
			let stored = getFromStorage("backgroundId");
			if (stored !== null && stored !== undefined) {
				commit('setBackgroundId', stored);
			}
		}
	}
}