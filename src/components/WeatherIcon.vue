<template>
<div>
	<i :class="wiWeatherIconName" class="wi"></i>
</div>
</template>

<script>
/*
Possible icon names:
	clear-day
	clear-night
	rain
	snow
	sleet
	wind
	fog
	cloudy
	partly-cloudy-day
	partly-cloudy-night
	((default))
*/
require('@/assets/weather-icons/css/weather-icons.min.css');
export default {
	props: ['name'],
	computed: {
		weatherIconName() {
			if (this.name === "clear-day") return "day-sunny";
			else if (this.name === "clear-night") return "night-clear";
			else if (this.name === "rain") return "rain-mix";
			else if (this.name === "snow") return "snow";
			else if (this.name === "sleet") return "sleet";
			else if (this.name === "wind") return "strong-wind";
			else if (this.name === "fog") return "fog";
			else if (this.name === "cloudy") return "cloud";
			else if (this.name === "partly-cloudy-day") return "day-cloudy";
			else if (this.name === "partly-cloudy-night") return "night-alt-cloudy";
			else return "na";
		},
		wiWeatherIconName() {
			return "wi-" + this.weatherIconName;
		}
	}
}
</script>

<style>
.wi {
	font-size: 3em;
}
</style>
