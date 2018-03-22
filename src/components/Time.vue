<template>
<div class="time">{{timeDisplay}}</div>
</template>

<script>
export default {
	computed: {
		timeDisplay() {
			return this.$store.getters.timeDisplay;
		}
	},
	beforeCreate() {
		this.$store.dispatch('initializeTime');
	},
	beforeDestroy() {
		this.$store.dispatch('stopInterval');
	}
}
</script>

<style>
.time {
	font-size: 2em;
	text-align: center;
}
</style>
