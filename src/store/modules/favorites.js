import { saveToStorage, getFromStorage } from '@/api/localstorage';

export default {
	state: {
		favorites: [
			{
				"title": "Blackboard – Black",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			},
			{
				"title": "Blackboard – Blackboard Learn",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			},
			{
				"title": "Blackboard – Blackboard Lea",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			}
		]
	},
	getters: {
		favorites: state => state.favorites,
		favoritesAmount: state => state.favorites.length
	},
	mutations: {
		setFavorites: (state, favArr) => state.favorites = favArr,
		addFavorite: (state, fav) => {
			if (!fav.url.startsWith("http")) {
				fav.url = "https://" + fav.url;
			}
			state.favorites.push(fav)
		},
		removeFavorite: (state, index) => state.favorites.splice(index, 1)
	},
	actions: {
		addFavorite({commit, dispatch}, fav) {
			commit('addFavorite', fav);
			dispatch('saveFavorites');
		},
		removeFavorite({commit, dispatch}, index) {
			commit('removeFavorite', index);
			dispatch('saveFavorites');
		},
		loadFavorites({commit}) {
			let storedFavs = getFromStorage("favorites");
			if (storedFavs) {
				storedFavs = JSON.parse(storedFavs);
				if (storedFavs !== null && storedFavs !== undefined) {
					commit('setFavorites', storedFavs);
				}
			}
		},
		saveFavorites({getters, commit}) {			
			saveToStorage("favorites", JSON.stringify(getters.favorites));
		}
	}
}