export default {
	state: {
		favorites: [
			{
				"title": "Blackboard – Blackboard Learn",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			}
		]
	},
	getters: {
		favorites: state => state.favorites
	},
	mutations: {
		setFavorites: (state, favArr) => state.favorites = favArr,
		addFavorite: (state, fav) => state.favorites.push(fav),
		removeFavorite: (state, index) => state.favorites.splice(index, 1)
	},
	actions: {
		
	}
}