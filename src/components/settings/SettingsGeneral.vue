<template>
<div class="general-settings">
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
</template>

<script>
export default {
	props: ['saveOnClose'],
	data() {
		return {
			username: null,
			currentUnsplashCollection: null
		}
	},
	computed: {
		possibleUnsplashCollections() {
			return this.$store.getters.possibleUnsplashCollections;
		}
	},
	methods: {
		save() {
			console.log("Saving general settings.");
			this.$store.dispatch('saveSettings', {username: this.username});
			this.$store.dispatch('saveBackgroundSettings', this.currentUnsplashCollection);
		}
	},
	beforeMount() {
		this.username = this.$store.getters.username;
		this.currentUnsplashCollection = this.$store.getters.currentUnsplashCollection;
	},
	beforeDestroy() {
		if (this.saveOnClose === true) this.save();
	}
}
</script>

<style>

</style>
