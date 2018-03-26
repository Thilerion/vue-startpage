<template>
	<transition name="show-bg">
	<div v-show="loaded" class="background" :style="{backgroundImage: `url(${backgroundUrl})`}"></div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			loaded: false
		}
	},
	computed: {
		backgroundUrl() {
			return this.$store.getters.backgroundUrl;
		}
	},
	created() {
		console.log("Loading bg...");
		console.time("bg");
		let bgImg = new Image();
		bgImg.onload = () => {
			console.log("Bg loaded: " + bgImg.src);
			console.timeEnd("bg");
			this.loaded = true;
		}
		bgImg.src = this.backgroundUrl;
	},
	beforeCreate() {
		this.$store.dispatch('loadBackgroundSettings');
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
	filter: brightness(85%) contrast(90%);
	transform: scale(1.05);
}

.background::after {
	display: block;
	content: "";
	position: relative;
	height: 100%;
	width: 100%;
	background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 60%,rgba(0,0,0,0.3) 95%);
}

.show-bg-enter-active, .show-bg-leave-active {
	transition: opacity .4s ease, transform .6s ease;
}

.show-bg-enter, .show-bg-leave-to {
	opacity: 0;
	transform: scale(1);
}
</style>
