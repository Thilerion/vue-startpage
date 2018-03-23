<template>
<transition name="fade-settings">
	<div class="settings-overlay">
		<button class="close-button" @click="toggleSettingsOverlay">
			<svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
	</div>
</transition>
</template>

<script>
export default {
	methods: {
		toggleSettingsOverlay() {
			this.$store.commit("toggleSettingsOverlay");
		}
	}
}
</script>

<style>
.settings-overlay {
	position: fixed;
	top: 0; bottom: 0;
	left: 0; right: 0;
	background: rgba(0,0,0,.95);
	opacity: 1;
	z-index: 9999;
}

.close-button {
	position: absolute;
	top: 5px;
	right: 5px;
}

.close-icon {
	height: 42px;
	width: 42px;
}

.fade-settings-enter-active, .fade-settings-leave-active {
	transition: opacity .4s ease;
}

.fade-settings-enter, .fade-settings-leave-to {
	opacity: 0;
}
</style>
