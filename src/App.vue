<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
	<SpBackground/>

  </div>
</template>

<script>
import Background from './components/Background';

export default {
	components: {
		SpBackground: Background
	}
}
</script>

<style>
html, body {
	height: 100%;
}

#app {

}
</style>
