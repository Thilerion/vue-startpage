<template>
<div class="top-sites">
	<ul class="site-list">
		<li class="site-item" v-for="site in topSites" :key="site.title">
			<a class="site-link" :href="site.url">
				<img class="site-icon" :src="siteUrlFavicon(site.url)" :alt="site.title">
				<span class="site-link-text">{{site.title}}</span>
			</a>
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
				return `chrome://favicon/size/32/${siteUrl}`;
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
.top-sites {
	display: inline-block;
}

.site-list {
	padding-left: 0;
	display: inline-grid;
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(5, auto);
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
	transition: color .4s ease, background .3s ease, text-shadow .4s ease;
	border-radius: 10px;
	padding: 5px .5em;
	text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}

.site-link:hover {
	text-shadow: none;
	color: black;
	background: rgba(255,255,255,0.4);
}

.site-link-text {
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 10em;
}
</style>
