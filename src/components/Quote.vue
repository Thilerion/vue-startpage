<template>
<div class="quote-wrapper" v-show="loaded" @mouseover="showRefresh = true" @mouseout="showRefresh = false">
	<p class="quote">{{quote}}</p>
	<p class="quote-author">- {{author}}</p>
	<transition name="fade-icon">
		<button class="refresh-button" @click="getNewQuote" v-if="showRefresh">
			<svg class="refresh-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
				<path d="M0 0h24v24H0z" fill="none"/>
			</svg>
		</button>
	</transition>
	
</div>
</template>

<script>
import fetchQuote from '@/api/forismatic-api';
export default {
	data() {
		return {
			quote: "",
			author: "",
			loaded: false,
			showRefresh: true
		}
	},
	methods: {
		getNewQuote() {
			fetchQuote().then((quoteJson) => {
				console.log(quoteJson);
				this.quote = quoteJson.quoteText;
				this.author = quoteJson.quoteAuthor;
				if (this.author == null || this.author === "") this.author = "Anonymous";
				this.loaded = true;
			});
		}
	},
	created() {
		this.getNewQuote();
	}
}
</script>

<style scoped>
.quote-wrapper {
	display: inline-block;
	max-width: 50em;
	padding: 1em;
	position: relative;
	user-select: none;
}

.quote-wrapper:not(:first-of-type) {
	margin-top: 1.5em;
}

.quote {
	font-size: 1.5em;
	text-align: center;
	margin: 0 0.5em 0.5em;
}

.quote-author {
	text-align: right;
	font-style: italic;
	font-size: 1em;
	margin: 0;
}

.refresh-button {
	position: absolute;
	right: .25em;
	top: 1em;
}

.refresh-icon {
	fill: currentColor;
	height: 1.5em;
	width: 1.5em;
	opacity: 0.9;
}

.fade-icon-enter-active, .fade-icon-leave-active {
	transition: opacity .2s ease;
}

.fade-icon-enter, .fade-icon-leave-to {
	opacity: 0;
}
</style>
