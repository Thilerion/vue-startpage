<template>
<div class="quote-wrapper" v-show="loaded">
	<p class="quote">{{quote}}</p>
	<p class="quote-author">- {{author}}</p>
</div>
</template>

<script>
import fetchQuote from '@/api/forismatic-api';
export default {
	data() {
		return {
			quote: "",
			author: "",
			loaded: false
		}
	},
	beforeCreate() {
		fetchQuote().then((quoteJson) => {
			console.log(quoteJson);
			this.quote = quoteJson.quoteText;
			this.author = quoteJson.quoteAuthor;
			this.loaded = true;
		});
	}
}
</script>

<style>
.quote-wrapper {
	display: inline-block;
	max-width: 50em;
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
</style>
