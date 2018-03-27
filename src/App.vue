<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
	<SpBackground/>
	<div class="grid">
		<div class="h-center v-center time-welcome">
			<SpTime v-if="componentsEnabled.time"/>
			<SpWelcome v-if="componentsEnabled.welcome"/>
		</div>
		<div class="h-center v-bottom">
			<SpTopSites v-if="componentsEnabled.topSites"/>
		</div>
		<div class="h-center v-top">
			<SpNews v-if="componentsEnabled.news" />
		</div>
		<div class="v-top h-right">
			<SpWeather v-if="componentsEnabled.weather" class="weather-widget" />
		</div>
		<div class="h-right v-bottom">
			<SpSettingsButton/>
		</div>
	</div>
	<SpSettings v-if="settingsOpen" />	
  </div>
</template>

<script>
import Background from './components/Background';
import Time from './components/Time';
import Welcome from './components/Welcome';
import TopSites from './components/TopSites';
import Weather from './components/Weather';
import SettingsButton from './components/SettingsButton'
import Settings from './components/Settings'
import News from './components/News'

export default {
	components: {
		SpBackground: Background,
		SpTime: Time,
		SpWelcome: Welcome,
		SpTopSites: TopSites,
		SpWeather: Weather,
		SpSettingsButton: SettingsButton,
		SpSettings: Settings,
		SpNews: News
	},
	computed: {
		componentsEnabled() {
			return this.$store.getters.componentsEnabled;
		},
		settingsOpen() {
			return this.$store.getters.settingsOpen;
		}
	}
}
</script>

<style>
html, body {
	height: 100%;
}

body {
	box-sizing: border-box;
	font-size: initial;
}

*, *::after, *::before {
	box-sizing: inherit;
}

#app {
	color: white;
	text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	font-family: sans-serif;
}

button {
	border: none;
	padding: 0;
	margin: 0;
	background: transparent;
	color: inherit;
	outline: none;
	cursor: pointer;
}

.time-welcome {
	display: inline-block;
	align-self: center;
	font-size: 7vmin;
	user-select: none;
}

.weather-widget {
	user-select: none;
	display: inline-block;
}

.settings-button {
	display: inline-block;
}

.grid {
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-rows: repeat(3, 1fr);
	min-height: 100vh;
	justify-content: center;
	padding: 1em;
}

.h-center {
	grid-column: 1 / span 3;
	text-align: center;
}

.v-center {
	grid-row: 2;
}

.h-left {
	grid-column: 1;
}

.h-right {
	grid-column: 3;
	text-align: end;
}

.v-top {
	grid-row: 1;
	align-self: flex-start;
}

.v-bottom {
	grid-row: 3;
	align-self: flex-end;
}

@media screen and (max-width: 1300px) {
	body {
		font-size: 87.5%;
		font-size: 75%;
	}
}


</style>
