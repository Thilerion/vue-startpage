<template>
<div class="top-sites">
	<ul class="site-list">
		<li class="site-item" v-for="site in topSites" :key="site.title"><a class="site-link" :href="site.url">{{site.title}}</a></li>
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
	beforeCreate() {
		this.$store.dispatch('loadTopSites');
	}
}
</script>

<style scoped>
.site-list {
	padding-left: 0;
	display: grid;
	grid-auto-rows: 2em;
	grid-template-columns: repeat(5, 8em);
	grid-column-gap: 1em;
	text-align: center;
}

.site-item {
	max-width: 8em;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.site-link {
	color: white;
}
</style>
