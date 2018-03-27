<template>
<div>
	<div v-for="(item, index) in rssFeedItems" :key="index">{{item.title}}</div>
</div>
</template>

<script>
export default {
	computed: {
		rssFeedItems() {
			return this.$store.getters.currentItems;
		}
	},
	mounted() {
		this.$store.dispatch('getRssFeed');
	}
}
</script>

<style>

</style>
