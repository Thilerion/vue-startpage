<template>
<div class="top-sites">
	<ul class="site-list">
		<li class="site-item" v-for="site in topSites" :key="site.title">
			<img class="site-icon" :src="siteUrlFavicon(site.url)" :alt="site.title">
			<a class="site-link" :href="site.url">{{site.title}}</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	computed: {
		topSites() {
			return this.$store.getters.topSites;
		}
	},
	methods: {
		siteUrlFavicon(siteUrl) {
			if (chrome.topSites !== undefined) {
				return `chrome://favicon/${site.url}`;
			} else {
				return require('../../public/img/icons/favicon-32x32.png');
			}
		}
	},
	beforeCreate() {
		this.$store.dispatch('loadTopSites');
	}
}
</script>

<style scoped>
.site-list {
	padding-left: 0;
	display: grid;
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(5, auto);
	grid-column-gap: 10px;
	grid-row-gap: 1em;
	text-align: center;
}

.site-item {
	display: flex;
	flex-direction: column;
}

.site-icon {
	height: 32px;
	width: 32px;
	align-self: center;
	padding: 0.5em 0;
}

.site-link {
	color: white;
	width: 10em;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
