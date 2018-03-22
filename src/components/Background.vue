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
	filter: brightness(95%) contrast(90%);
}
</style>
