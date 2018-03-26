<template>
<div class="weather">
	<transition name="weather-loaded" mode="out-in">

		<div class="weather-show" v-if="weatherUpToDate" key="display">
			<div class="weather-hover" v-on:mouseover="popupActive = true" v-on:mouseleave="popupActive = false"></div>

			<SpWeatherShowSmall :currentWeather="currentWeather" />			

			<transition name="weather-large-popup">
				<SpWeatherShowLarge v-if="popupActive" :dailyWeather="dailyWeather" class="weather-show-large"/>
			</transition>
		
		</div>

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
import WeatherShowLarge from './WeatherShowLarge';

export default {
	components: {
		SpWeatherShowSmall: WeatherShowSmall,
		SpWeatherShowLarge: WeatherShowLarge
	},
	data() {
		return {
			popupActive: false
		}
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
		},
		dailyWeather() {
			return this.$store.getters.dailyWeather;
		}
	},
	beforeCreate() {
		this.$store.dispatch("loadWeatherFromStorage");
		this.$store.dispatch('getWeather');
	}
}
</script>

<style>
.weather-hover {
	position: fixed;
	right: 0;
	top: 0;
	height: 6em;
	width: 8em;
	z-index: 1; /*to keep it above the large weather-show widget*/
}

.weather-show {
	position: relative;
	transform-origin: top right;
}

.weather-show-large {
	position: absolute;
	transform-origin: inherit;;
	width: auto;
	white-space: nowrap;
	max-width: 60vw;
	overflow: hidden;
	right: 0;
}

.weather-loaded-enter-active, .weather-loaded-leave-active {
	transition: opacity .3s ease;
}

.weather-loaded-enter, .weather-loaded-leave-to {
	opacity: 0;
}

.weather-large-popup-enter-active, .weather-large-popup-leave-active {
	transition: all .4s ease;
}

.weather-large-popup-enter, .weather-large-popup-leave-to {
	opacity: 0;
	transform: scale(0);
}
</style>
