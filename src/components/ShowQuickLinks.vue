<template>
<ul class="site-list">
	<li class="site-item" v-for="(site, index) in links" :key="index">
		<a class="site-link" :href="site.url">
			<img class="site-icon" :src="siteUrlFavicon(site.url)" :alt="site.title">
			<span class="site-link-text">{{site.title}}</span>
		</a>
	</li>
</ul>
</template>

<script>
export default {
	props: ['links'],
	methods: {
		siteUrlFavicon(siteUrl) {
			if (chrome.topSites !== undefined) {
				return `chrome://favicon/size/32/${siteUrl}`;
			} else {
				return require('../../public/img/icons/favicon-32x32.png');
			}
		}
	}
}
</script>

<style>
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
	box-sizing: content-box;
	height: 2em;
	width: 2em;
	align-self: center;
	padding: 0.5em 0;
	filter: drop-shadow(0 0 1em rgba(0,0,0,0.1)) brightness(105%);
}

.site-link {
	color: white;
	transition: all .2s ease;
	border-radius: 0.75em;
	padding: 0.25em 1em;
	text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
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
	width: 6.8em;
}
</style>
