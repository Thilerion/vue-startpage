<template>
<div>
	{{temperature | round}}C
	<br>
	{{apparentTemperature | round}}C
	<br>
	{{weatherSummary}}
	<br>
	<SpWeatherIcon :name="iconName"/>
</div>
</template>

<script>
import WeatherIcon from './WeatherIcon';
export default {
	props: ['currentWeather'],
	components: {
		SpWeatherIcon: WeatherIcon
	},
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
