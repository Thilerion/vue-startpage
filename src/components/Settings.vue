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
			<div class="settings-group">
				<h3 class="settings-group-header">General</h3>
				<div class="form-group">
					<label for="username">Name</label>
					<input type="text" name="username" id="username" v-model="username">
				</div>
				<div class="form-group">
					<label for="bg-image">Background image collection</label>
					<select name="bg-image" v-model="currentUnsplashCollection">
						<option v-for="(col, index) in possibleUnsplashCollections" :value="index" :key="index">
							{{col.name}}
						</option>
					</select>
				</div>
			</div>

			<div class="settings-group">
				<h3 class="settings-group-header">Widgets</h3>
				<div class="form-group">
					<label for="setting-top-sites">Most visited websites</label>
					<input type="checkbox" name="setting-top-sites" id="setting-top-sites" v-model="componentsEnabled.topSites">
				</div>
				<div class="form-group">
					<label for="setting-time">Time</label>
					<input type="checkbox" name="setting-time" id="setting-time" v-model="componentsEnabled.time">
				</div>
				<div class="form-group">
					<label for="setting-welcome">Greeting</label>
					<input type="checkbox" name="setting-welcome" id="setting-welcome" v-model="componentsEnabled.welcome">
				</div>
				<div class="form-group">
					<label for="setting-weather">Weather</label>
					<input type="checkbox" name="setting-weather" id="setting-weather" v-model="componentsEnabled.weather">
				</div>
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
			username: null,
			componentsEnabled: {},
			currentUnsplashCollection: null
		}
	},
	computed: {
		backgroundUrl() {
			return this.$store.getters.backgroundUrl;
		},
		possibleUnsplashCollections() {
			return this.$store.getters.possibleUnsplashCollections;
		}
	},
	methods: {
		toggleSettingsOverlay() {
			this.$store.commit("toggleSettingsOverlay");
		},
		saveSettings() {
			let updatedSettings = {
				username: this.username,
				componentsEnabled: this.componentsEnabled
			};
			this.$store.dispatch("saveSettings", updatedSettings);
			this.$store.dispatch("saveBackgroundSettings", this.currentUnsplashCollection);
		},
		saveSettingsAndClose() {
			this.saveSettings();
			this.toggleSettingsOverlay();
		}
	},
	beforeMount() {
		this.username = this.$store.getters.username;
		this.currentUnsplashCollection = this.$store.getters.currentUnsplashCollection;
		this.componentsEnabled = this.$store.getters.componentsEnabled;
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
	transition: all .5s ease;
}

.fade-settings-enter, .fade-settings-leave-to {
	opacity: 0;
}

.fade-settings-enter {
	transform: scale(1.1);
}

.fade-settings-leave-to {
	transform: scale(0.9);
}
</style>
