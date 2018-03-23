<template>
<div>
	{{temperature | round}}C
	<br>
	{{apparentTemperature | round}}C
	<br>
	{{weatherSummary}}
	<br>
	{{iconName}}
</div>
</template>

<script>
export default {
	props: ['currentWeather'],
	computed: {
		temperature() {
			return this.currentWeather.temperature;
		},
		apparentTemperature() {
			return this.currentWeather.apparentTemperature;
		},
		weatherSummary() {
			return this.currentWeather.summary;
		},
		iconName() {
			return this.currentWeather.icon;
		}
	},
	filters: {
		round(n) {
			return Math.round(n);
		}
	}
}
</script>

<style>

</style>
