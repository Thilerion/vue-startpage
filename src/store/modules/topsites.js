export default {
	state: {
		topSites: []
	},
	getters: {
		topSites: state => state.topSites
	},
	mutations: {
		setTopSites: (state, arrTopSites) => state.topSites = arrTopSites
	},
	actions: {
		loadTopSites: ({commit}) => {
			console.log("Loading Top Sites.");
			if (chrome.topSites) {
				chrome.topSites.get(function (arrayOfTopSites) {
					console.log(arrayOfTopSites);
					commit('setTopSites', arrayOfTopSites);
				});
			} else {
				commit('setTopSites', testTopSites);
			}
		}
	}
}

let testTopSites = [
	{
		"title": "Blackboard – Blackboard Learn",
		"url": "http://blackboard.leidenuniv.nl/webapps/portal/frameset.jsp"
	},
	{
		"title": "reddit: the front page of the internet",
		"url": "http://www.reddit.com/"
	},
	{
		"title": "vue-startpage-2",
		"url": "http://localhost:8080/"
	},
	{
		"title": "Gmail",
		"url": "http://gmail.com/"
	},
	{
		"title": "YouTube",
		"url": "https://www.youtube.com/"
	},
	{
		"title": "9292 reist met je mee - 9292.nl",
		"url": "http://9292.nl/"
	},
	{
		"title": "AliExpress.com - Online Shopping for Popular Electronics, Fashion, Home & Garden, Toys & Sports, Automobiles and More.",
		"url": "https://www.aliexpress.com/"
	},
	{
		"title": "Bulma: a modern CSS framework based on Flexbox",
		"url": "https://bulma.io/"
	},
	{
		"title": "Thilerion/Pomo-Timer",
		"url": "https://github.com/Thilerion/Pomo-Timer"
	},
	{
		"title": "Google",
		"url": "https://www.google.nl/"
	}
];