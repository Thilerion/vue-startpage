<template>
<div class="weather-show-large">
	<div class="day-weather" v-for="(day, index) in weatherDays" :key="day.time">
		<div class="day-name">{{dayString(day.time, index)}}</div>
		<div class="day-container">
			<SpWeatherIcon :name="day.icon" class="day-icon" />
			<div class="day-temps">
				<span class="day-temp-high">{{day.temperatureHigh | round}}&deg;C</span>
				<span class="day-temp-low">{{day.temperatureLow | round}}&deg;C</span>
			</div>			
		</div>
		
	</div>
</div>
</template>

<script>
import moment from 'moment';
import WeatherIcon from './WeatherIcon';
export default {
	props: ['dailyWeather'],
	components: {
		SpWeatherIcon: WeatherIcon
	},
	computed: {
		weatherDays() {
			return this.dailyWeather;
		}
	},
	methods: {
		dayString(time, n) {
			if (n === 0) return "vandaag";
			else if (n === 1) return "morgen";
			else if (n === 2) return "overmorgen";
			else return moment(time).format("dddd");
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
.day-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 0.5em;
}

.day-icon {
	font-size: 2.25em;
	padding: 0.25em 0;
	line-height: 0.5;
}

.day-temps {
	text-align: left;
	margin-top: 0.5em;
}

.day-temps > span {
	margin: 0 0.25em;
}

.day-temp-low {
	color: rgba(180,180,180,1);
}

.weather-show-large {
	position: absolute;
	right: 0;
	border: 2px solid white;
	background-color: rgba(0,0,0,0.5);
	border-radius: 10px;
	padding: 0.75em 0.25em;
	text-align: center;
	display: grid;
	width: auto;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 1fr;
	grid-row-gap: 1.5em;
	grid-column-gap: 0.75em;
	padding: 1em;
	font-size: 75%;
}

.day-weather {
	min-width: 5em;
	flex: 1 0 7em;
}
</style>
