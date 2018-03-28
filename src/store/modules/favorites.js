export default {
	state: {
		favorites: [
			{
				"title": "Blackboard – Blackboard Learn",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			},
			{
				"title": "Blackboard – Blackboard Learn",
				"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
			},
			{
				"title": "Blackboard – Blackboard Learn",
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
		addFavorite: (state, fav) => state.favorites.push(fav),
		removeFavorite: (state, index) => state.favorites.splice(index, 1)
	},
	actions: {
		
	}
}