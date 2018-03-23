<template>
	<div class="background" :style="{backgroundImage: `url(${backgroundUrl})`}">
		
	</div>
</template>

<script>
export default {
	computed: {
		backgroundUrl() {
			return this.$store.getters.backgroundUrl;
		}
	}
}
</script>

<style>
.background {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -1;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	filter: brightness(90%) contrast(90%);
}

.background::after {
	display: block;
	content: "";
	position: relative;
	height: 100%;
	width: 100%;
	background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 65%,rgba(0,0,0,0.3) 95%);
}
</style>
