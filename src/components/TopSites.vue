<template>
<div class="top-sites">
	<SpShowQuickLinks :links="topSites" />
</div>
</template>

<script>
import ShowQuickLinks from '@/components/ShowQuickLinks'
export default {
	components: {
		SpShowQuickLinks: ShowQuickLinks
	},
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
.top-sites {
	display: inline-block;
}
</style>
