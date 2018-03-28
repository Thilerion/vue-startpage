<template>
<div>
	<div class="slide-container" @mouseover="mouseOver = true" @mouseout="mouseOver = false">
		<button class="slide-side slide-left" @click="previous">
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
				<path d="M0-.5h24v24H0z" fill="none"/>
			</svg>
		</button>
		<div class="list-items">
			<transition name="slide-news">
				<div v-for="(item, index) in rssFeedItems" :key="index" v-if="index === currentIndex" class="list-item">
					<a href="#">{{item.title}}</a>
				</div>
			</transition>
		</div>		
		<button class="slide-side slide-right" @click="next">
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
				<path d="M0-.25h24v24H0z" fill="none"/>
			</svg>
		</button>		
	</div>
	<button @click="start">Start</button>
	<button @click="stop">Stop</button>
</div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			timeoutId: null,
			intervalLength: 10000,
			mouseOver: false
		}
	},
	computed: {
		rssFeedItems() {
			return this.$store.getters.currentItems;
		},
		itemArrayLength() {
			return this.rssFeedItems.length;
		}
	},
	methods: {
		next() {
			this.stop();
			if (this.currentIndex + 1 >= this.itemArrayLength) {
				this.currentIndex = 0;
			} else {
				this.currentIndex += 1;
			}
			this.start();
		},
		previous() {
			this.stop();
			if (this.currentIndex -1 < 0) {
				this.currentIndex = this.itemArrayLength - 1;
			} else {
				this.currentIndex -= 1;
			}
			this.start();
		},
		start() {
			this.timeoutId = setInterval(() => {
				if (this.mouseOver !== true) {
					this.next();
				} else {
					console.log("Mouse on div, don't go to next news item!");
				}
				
			}, this.intervalLength);
		},
		stop() {
			clearInterval(this.timeoutId);
		}
	},
	beforeCreate() {
		this.$store.dispatch('getRssFeed');
	},
	beforeDestroy() {
		this.stop();
	},
	mounted() {
		if (this.itemArrayLength > 0) this.start();
	},
	watch: {
		itemArrayLength(newVal, oldVal) {
			if (newVal > 0) this.start();
		} 
	}
}
</script>

<style>
.slide-container {
	margin: auto;
	min-height: 2em;
	width: 70%;
	max-width: 50em;
	min-width: 30em;
	display: flex;
}

.list-items {
	background-color: rgba(0,0,0,0.25);
	flex: 1 1 auto;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	position: relative;
}

.list-item {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
}

.list-item a {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-decoration: none;
}

.list-item a:hover {
	text-decoration: underline;
}

.slide-side {
	width: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
}

.slide-side svg {
	width: 1.5em;
	height: 1.5em;
	fill: currentColor;
}

.slide-container a {
	color: currentColor;
}

.slide-news-enter-active, .slide-news-leave-active {
	transition: all 2.5s ease;
}

.slide-news-enter, .slide-news-leave-to {
	opacity: 0.7;
}

.slide-news-enter {
	transform: translateX(90%);
}

.slide-news-leave-to {
	transform: translateX(-100%);
}
</style>
