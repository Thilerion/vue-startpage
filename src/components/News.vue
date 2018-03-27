<template>
<div>
	<div class="slide-container" @mouseover="mouseOver = true" @mouseout="mouseOver = false">
		<transition name="slide-news">
			<a :href="item.link" v-for="(item, index) in rssFeedItems" :key="index" v-if="index === currentIndex" class="list-item">{{item.title}}</a>
		</transition>
	</div>
	<button @click="next">Previous</button>
	<button @click="previous">Next</button>
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
			if (this.currentIndex + 1 >= this.itemArrayLength) {
				this.currentIndex = 0;
			} else {
				this.currentIndex += 1;
			}
		},
		previous() {
			if (this.currentIndex -1 < 0) {
				this.currentIndex = this.itemArrayLength - 1;
			} else {
				this.currentIndex -= 1;
			}
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
	watch: {
		itemArrayLength(newVal, oldVal) {
			if (newVal > 0) this.start();
		} 
	}
}
</script>

<style>
.slide-container {
	border: solid rgba(255, 255, 255, 0.75);
	border-width: 0 5px;
	background: rgba(0,0,0,0.2);
	width: 30em;
	height: 3em;
	margin: auto;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
}

.list-item {
	position: absolute;
	left: 0;
	right: 0;
	padding: 1em;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

a.list-item {
	color: currentColor;
	text-decoration: none;
}

a.list-item:hover {
	text-decoration: underline;
}

.slide-news-enter-active, .slide-news-leave-active {
	transition: transform 1.5s ease-in-out, opacity 1.2s ease-in-out;
}

.slide-news-enter, .slide-news-leave-to {
	opacity: 0;
}

.slide-news-enter {
	transform: translateX(90%);
}

.slide-news-leave-to {
	transform: translateX(-100%);
}
</style>
