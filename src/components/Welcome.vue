<template>
<p class="welcome-text">{{welcomeString}}, {{username}}.</p>
</template>

<script>
export default {
	data() {
		return {
			timeOfDayStrings: ["Goedemorgen", "Goedemiddag", "Goedenavond"]
		}
	},
	computed: {
		username() {
			return this.$store.getters.username;
		},
		timeOfDay() {
			return this.$store.getters.timeOfDay;
		},
		welcomeString() {
			return this.timeOfDayStrings[this.timeOfDay];
		}
	}
}
</script>

<style>
.welcome-text {
	padding: 0;
	margin: 0;
	font-size: 1em;
	text-align: center;
}
</style>
