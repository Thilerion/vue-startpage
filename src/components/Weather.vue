<template>
<div class="weather">
	{{weatherState}}
</div>
</template>

<script>
export default {
	computed: {
		weatherState() {
			return this.$store.getters.weatherState;
		}
	},
	beforeCreate() {
		this.$store.dispatch('DEBUGgetTestResponse');
	}
}
</script>

<style>

</style>
