<template>
<div class="favorites-settings">
	<h3 class="settings-group-header">Custom favorites <small class="settings-text-small">{{favoritesLength}}/10 quick links</small></h3>				
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
</template>

<script>
export default {
	data() {
		return {
			addLinkTitle: "",
			addLinkUrl: ""
		}
	},
	computed: {
		favoritesLength() {
			return this.$store.getters.favoritesAmount;
		},
		favorites() {
			return this.$store.getters.favorites;
		}
	},
	methods: {
		addNewQuickLink() {
			if (this.addLinkTitle === "" || this.addLinkUrl === "") return;
			this.$store.dispatch('addFavorite', {title: this.addLinkTitle, url: this.addLinkUrl});
		},
		deleteQuickLink(n) {
			this.$store.dispatch('removeFavorite', n);
		}
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
</style>
