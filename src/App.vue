<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
	<SpBackground/>
	<div class="grid">
		<div class="center-center">
			<SpTime/>
			<SpWelcome/>
		</div>
	</div>	
  </div>
</template>

<script>
import Background from './components/Background';
import Time from './components/Time';
import Welcome from './components/Welcome';

export default {
	components: {
		SpBackground: Background,
		SpTime: Time,
		SpWelcome: Welcome
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
}

.grid {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.center-center {
	display: inline-block;
	font-size: 7vmin;
}
</style>
