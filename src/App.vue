<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
	<SpBackground/>
	<SpTime/>
  </div>
</template>

<script>
import Background from './components/Background';
import Time from './components/Time';

export default {
	components: {
		SpBackground: Background,
		SpTime: Time
	}
}
</script>

<style>
html, body {
	height: 100%;
}

#app {
	color: white;
	text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	font-family: sans-serif;
}
</style>
