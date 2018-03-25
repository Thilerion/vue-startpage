<template>
<transition name="fade-settings">
	<div class="settings-overlay">
		<div class="settings-background" :style="{backgroundImage: `url(${backgroundUrl})`}"></div>
		<button class="close-button" @click="toggleSettingsOverlay">
			<svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
		<div class="settings-inner">
			<h2 class="h2-settings">Settings</h2>
			<div class="form-group">
				<label for="username">Name</label>
				<input type="text" name="username" id="username" v-model="username">
			</div>
			<button class="save-settings" @click="saveSettingsAndClose">Save settings</button>
		</div>
	</div>
</transition>
</template>

<script>
export default {
	data() {
		return {
			username: null
		}
	},
	computed: {
		backgroundUrl() {
			return this.$store.getters.backgroundUrl;
		}
	},
	methods: {
		toggleSettingsOverlay() {
			this.$store.commit("toggleSettingsOverlay");
		},
		saveSettings() {
			let updatedSettings = {
				username: this.username
			};
			this.$store.commit("saveSettings", updatedSettings);
		},
		saveSettingsAndClose() {
			this.saveSettings();
			this.toggleSettingsOverlay();
		}
	},
	beforeMount() {
		this.username = this.$store.getters.username;
	}
}
</script>

<style>
.settings-overlay {
	position: fixed;
	top: 0; bottom: 0;
	left: 0; right: 0;	
	opacity: 1;
	z-index: 9999;
}

.settings-background {
	position: absolute;
	top: 0; bottom: 0;
	left: 0; right: 0;	
	z-index: -1;
	filter: brightness(25%) contrast(80%) blur(20px);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	transform: scale(1.07);
}

.settings-inner {
	width: 50%;
	margin: auto;
	padding: 1em;
	min-height: 20vh;
}

.h2-settings {
	font-size: 180%;
	margin: 0;
	text-align: center;
}

.form-group {
	margin: 1em 0;
}

.form-group label {
	display: block;
	line-height: 2;
}

.form-group input[type="text"] {
	border-radius: 4px;
	border: 1px solid transparent;
	padding: 0.5em;
	color: #333;
}

button.save-settings {
	border: 1px solid white;
	border-radius: 5px;
	padding: 0.6em 1em;
	min-width: 8em;
	transition: all .2s ease;
}

button.save-settings:hover {
	color: #333;
	background-color: white;
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
