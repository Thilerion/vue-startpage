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

			<div class="settings-group settings-components aligned">
				<h3 class="settings-group-header">Widgets</h3>
				<div class="form-group">
					<label for="setting-top-sites">Most visited websites</label>
					<input type="checkbox" name="setting-top-sites" id="setting-top-sites" v-model="componentsEnabled.topSites">
				</div>
				<div class="form-group">
					<label for="setting-favorites">Quick Links</label>
					<input type="checkbox" name="setting-favorites" id="setting-favorites" v-model="componentsEnabled.favorites">
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
				<div class="form-group">
					<label for="setting-news">News</label>
					<input type="checkbox" name="setting-news" id="setting-news" v-model="componentsEnabled.news">
				</div>
			</div>

			<div class="settings-group settings-quick-links">
				<h3 class="settings-group-header">Quick Links <small class="settings-text-small">{{favoritesLength}}/10 quick links</small></h3>				
				<table class="quick-link-table">
					<tbody>
						<tr v-for="(fav, index) in favorites" :key="index">
							<td class="quick-link-item">
								<div class="quick-link-title">{{fav.title}}</div>
								<div class="quick-link-url">{{fav.url}}</div>
							</td>
							<td class="quick-link-right"><button @click="deleteQuickLink(index)">Delete</button></td>
						</tr>
					</tbody>					
				</table>
				<transition name="fade-form-group">
					<div class="add-link form-group" v-show="favoritesLength < 10">
						<p>Add new link:</p>
						<input type="text" placeholder="Site title" v-model="addLinkTitle">
						<input type="text" placeholder="http://www.site.name.com" v-model="addLinkUrl">
						<button @click="addNewQuickLink">Add</button>
					</div>
				</transition>
			</div>

			<div class="settings-footer">
				<button class="save-settings" @click="saveSettingsAndClose">Save settings</button>
			</div>			
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
			currentUnsplashCollection: null,
			addLinkTitle: "",
			addLinkUrl: ""
		}
	},
	computed: {
		backgroundUrl() {
			return this.$store.getters.backgroundUrl;
		},
		possibleUnsplashCollections() {
			return this.$store.getters.possibleUnsplashCollections;
		},
		favoritesLength() {
			return this.$store.getters.favoritesAmount;
		},
		favorites() {
			return this.$store.getters.favorites;
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
		},
		addNewQuickLink() {
			if (this.addLinkTitle === "" || this.addLinkUrl === "") return;
			this.$store.commit('addFavorite', {title: this.addLinkTitle, url: this.addLinkUrl});
		},
		deleteQuickLink(n) {
			this.$store.commit('removeFavorite', n);
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
.quick-link-table, .quick-link-table tr, .quick-link-table td {
	padding: 0.25em 0.5em;
	border-collapse: collapse;
	line-height: 1.5;
}

.quick-link-table {
	width: 100%;
}

.quick-link-right {
	text-align: right;
}

.quick-link-url {
	font-style:italic;
	font-size: 0.8em;
}

.quick-link-table tr {
	border-bottom: 1px solid white;
	border-top: 1px solid white;
}

.add-link input[type="text"] {
	display: block;
	margin-bottom: 1em;
	width: 20em;
}

.add-link {
	max-height: 20em;
}

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
	filter: brightness(25%) contrast(80%) blur(0.7em);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	transform: scale(1.07);
}

.settings-inner {	
	margin: auto;
	padding: 1em 2em;
	min-height: 20vh;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1em;
}

.h2-settings {
	font-size: 1.8em;
	margin: 0;
	text-align: center;
	grid-row: 1;
	grid-column: 1 / span 2;
}

.settings-footer {
	grid-column: 1 / span 2;
	text-align: center;
}

.settings-components {
	grid-column: 1;
}

.settings-quick-links {
	grid-column: 2;
	grid-row: 2 / span 2;
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

button.save-settings, .add-link button {
	border: 1px solid white;
	border-radius: 5px;
	padding: 0.6em 1em;
	min-width: 8em;
	transition: all .2s ease;
}

button.save-settings:hover, .add-link button:hover {
	color: #333;
	background-color: white;
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
	transform: scale(1.1);
}

.fade-settings-leave-to {
	transform: scale(0.8);
}

.fade-form-group-enter-active {
	transition: all .2s ease;
	transform-origin: top center;
}

.fade-form-group-enter, .fade-form-group-leave-to {
	opacity: 0;
	transform: scaleY(0.1);
}
</style>
