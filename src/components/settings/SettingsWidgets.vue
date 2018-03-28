<template>
<div class="widgets-settings">
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
</template>

<script>
export default {
	props: ['saveOnClose'],
	data() {
		return {
			componentsEnabled: {}
		}
	},
	methods: {
		save() {
			this.$store.dispatch("saveSettings", {componentsEnabled: this.componentsEnabled});
		}
	},
	beforeMount() {		
		this.componentsEnabled = this.$store.getters.componentsEnabled;
	},
	beforeDestroy() {
		if (this.saveOnClose === true) this.save();
	}
}
</script>

<style>

</style>
