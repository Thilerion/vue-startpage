<template>
<div class="weather-small-container">
	<div class="top">
		<SpWeatherIcon :name="iconName" class="weather-icon" />
		<div class="weather-temp">{{temperature | round}}&deg;C</div>
	</div>
	<div class="weather-summary">{{weatherSummary}}</div>
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

<style scoped>
.weather-small-container {
	display: inline-block;
}

.weather-small-container .top {
	display: flex;
	justify-content: center;
	font-size: 2em;
	line-height: 0.95;
}

.weather-icon {
	padding: 0 0.75em 0 0;
}

.weather-summary {
	text-align: center;
	line-height: 2;
}
</style>
