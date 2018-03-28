<template>
<div class="favorites">
	<SpShowQuickLinks :links="favorites" />
</div>
</template>

<script>
import ShowQuickLinks from '@/components/ShowQuickLinks'
export default {
	components: {
		SpShowQuickLinks: ShowQuickLinks
	},
	computed: {
		favorites() {
			return this.$store.getters.favorites;
		}
	},
	beforeCreate() {
		this.$store.dispatch('loadTopSites');
	}
}
</script>

<style scoped>
.favorites {
	display: inline-block;
}
</style>