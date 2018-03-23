<template>
<div class="weather">
	<div v-if="weatherUpToDate" class="display-weather">{{currentWeather}}</div>
	<div v-else class="loading-weather">Loading weather...</div>
</div>
</template>

<script>
export default {
	computed: {
		currentWeather() {
			return this.$store.getters.currentWeather;
		},
		coords() {
			return this.$store.getters.coords;
		},
		weatherUpToDate() {
			return this.$store.getters.weatherUpToDate;
		}
	},
	beforeCreate() {
		this.$store.dispatch('DEBUGgetTestResponse');
	}
}
</script>

<style>

</style>
