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

			<div class="tabs">
				<button
					v-for="tab in tabs"
					:key="tab.name"
					class="tab-item"
					:class="{'tab-selected': tab.name === currentTab}"
					@click="currentTab = tab.name"
				>{{tab.display}}</button>
			</div>

			<div class="settings-tab-content">
				<keep-alive>
					<component :is="currentTab"/>
				</keep-alive>
			</div>			

			<div class="settings-footer">
				<button class="save-settings" @click="saveSettingsAndClose">Save settings</button>
			</div>			
		</div>
	</div>
</transition>
</template>

<script>
import SettingsGeneral from './settings/SettingsGeneral'
import SettingsWidgets from './settings/SettingsWidgets'
import SettingsFavorites from './settings/SettingsFavorites'
export default {
	components: {
		SpSettingsGeneral: SettingsGeneral,
		SpSettingsWidgets: SettingsWidgets,
		SpSettingsFavorites: SettingsFavorites
	},
	data() {
		return {
			tabs: [
				{
					"name": "SpSettingsGeneral",
					"display": "General"
				},
				{
					"name": "SpSettingsWidgets",
					"display": "Widgets"
				},
				{
					"name": "SpSettingsFavorites",
					"display": "Custom favorites"
				},
			],
			currentTab: "SpSettingsGeneral"
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
		saveSettingsAndClose() {			
			this.toggleSettingsOverlay();		
		},
		goToTab(tabId) {
			this.currentTab = tabId;
		}
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

.settings-overlay {
	--scaling: 1.07;
}

.settings-background {
	position: absolute;
	top: 0; bottom: 0;
	left: 0; right: 0;	
	z-index: -1;
	filter: brightness(25%) contrast(80%) blur(0.7em);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	transform: scale(var(--scaling));
}

.settings-inner {
	height: 100vh;
	width: 50%;
	margin: auto;
	padding: 0 1em;
	display: flex;
	flex-direction: column;
}

.settings-tab-content {
	flex: 1 1 80%;
	padding-top: 1em;
}

.settings-footer {
	flex: 0 0 6em;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 2.5em;
}

h2 {
	text-align: center;
}

.tabs {
	display: inline-flex;
	list-style: none;
	padding: 0;
	margin: 0;
	border-bottom: 1px solid currentColor;
}

.tab-item {
	padding: 1em;
}

.tab-item:not(:first-of-type) {
	margin-left: 1.5em;
}

.tab-selected {
	font-weight: bold;
	border-bottom: 3px solid currentColor;
}

.tab-custom-favorites {
	display: flex;
	justify-content: space-between;
}

.tab-custom-favorites > div {
	flex: 1 1 40%;
}

.settings-text-small {
	opacity: 0.7;
	font-size: 0.75rem;
	font-weight: normal;
	padding-left: 1em;
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

.radio-group-single {
	font-size: 0.9em;
	padding-left: 1em;
}

.settings-group.aligned label {
	display: inline-block;
	min-width: 10em;
	width: 40%;
	max-width: 20em;
}

.settings-group.aligned input {
	margin: 0 1em;
	vertical-align: middle;
}

.save-settings:hover {
	color: #333;
	background-color: white;
}

.save-settings {
	border: 1px solid white;
	border-radius: 5px;
	padding: 0.6em 1em;
	min-width: 8em;
	transition: all .2s ease;
}

.close-button {
	position: absolute;
	top: 5px;
	right: 5px;
}

.close-icon {
	height: 2.5em;
	width: 2.5em;
}

.fade-settings-enter-active, .fade-settings-leave-active {
	transition: all .5s ease;
}

.fade-settings-enter, .fade-settings-leave-to {
	opacity: 0;
}

.fade-settings-enter {
	transform: scale(var(--scaling));
}

.fade-settings-leave-to {
	transform: scale(calc(1 / var(--scaling)));
}

.switch-tab-enter-active, .switch-tab-leave-active {
	transition: all .2s ease;
	transform-origin: 30% 20%;
}

.switch-tab-enter, .switch-tab-leave-to {
	opacity: 0;
	transform: scale(0.95);
}




/*

button.save-settings:hover, .add-link button:hover {
	color: #333;
	background-color: white;
}

.h2-settings {
	font-size: 1.8em;
	margin: 0;
	text-align: center;
	grid-row: 1;
	grid-column: 1 / span 2;
}

.settings-quick-links {
	grid-column: 2;
	grid-row: 2 / span 2;
}

*/
</style>
