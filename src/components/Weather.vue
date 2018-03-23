<template>
<div class="weather">
	<transition name="weather-loaded" mode="out-in">
		<SpWeatherShowSmall
			v-if="weatherUpToDate"
			key="display"
			:currentWeather="currentWeather"
		/>
		<div class="loading-weather"
			v-else
			key="loading">
			Loading weather...
		</div>
	</transition>
</div>
</template>

<script>
import WeatherShowSmall from './WeatherShowSmall';

export default {
	components: {
		SpWeatherShowSmall: WeatherShowSmall
	},
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
.weather-loaded-enter-active, .weather-loaded-leave-active {
	transition: opacity .3s ease;
}

.weather-loaded-enter, .weather-loaded-leave-to {
	opacity: 0;
}
</style>
