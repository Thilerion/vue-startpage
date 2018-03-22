<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
	<SpBackground/>
	<div class="grid">
		<div class="h-center v-center time-welcome">
			<SpTime/>
			<SpWelcome/>
		</div>
		<div class="h-center v-bottom">
			<SpTopSites/>
		</div>		
	</div>	
  </div>
</template>

<script>
import Background from './components/Background';
import Time from './components/Time';
import Welcome from './components/Welcome';
import TopSites from './components/TopSites';

export default {
	components: {
		SpBackground: Background,
		SpTime: Time,
		SpWelcome: Welcome,
		SpTopSites: TopSites
	}
}
</script>

<style>
html, body {
	height: 100%;
}

#app {
	color: white;
	text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	font-family: sans-serif;
	font-size: 16px;
}

.time-welcome {
	display: inline-block;
	align-self: center;
	font-size: 7vmin;
}

.grid {
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(3, 1fr);
	min-height: 100vh;
	justify-content: center;
}

.h-center {
	grid-column: 2;
}

.v-center {
	grid-row: 2;
}

.h-left {
	grid-column: 1;
}

.h-right {
	grid-column: 3;
}

.v-top {
	grid-row: 1;
	align-self: flex-start;
}

.v-bottom {
	grid-row: 3;
	align-self: flex-end;
}
</style>
