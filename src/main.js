import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

import 'normalize.css';

Vue.config.productionTip = false

Vue.filter('trim', function (str) {
	if (!str) return '';
	return str.trim();
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
