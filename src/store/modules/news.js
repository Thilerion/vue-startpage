import { fetchRSSFeed } from '@/api/rss-api';

export default {
	state: {
		rssFeedUrls: ["http://feeds.nos.nl/nosnieuwsalgemeen", "https://www.nu.nl/rss/Algemeen", "https://news.google.nl/news/rss"],
		currentFeedIndex: 0,
		currentItems: []
	},
	getters: {
		currentFeed: state => state.rssFeedUrls[state.currentFeedIndex],
		currentItems: state => state.currentItems
	},
	mutations: {
		setFeedItems: (state, feedArray) => state.currentItems = feedArray
	},
	actions: {
		getRssFeed({getters, commit}) {
			fetchRSSFeed(getters.currentFeed, 12, "tk4mfz4k6mwzaiij1xwhthroeexo5rxreucayn2z")
			.then(function (feedObj) {
				console.log(feedObj.items);
				commit('setFeedItems', feedObj.items);
			});
		}
	}
}