import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import i18n from './locales/index.js'
import router from './routes/index.js'
Vue.config.productionTip = false
// 状态 数据比较少的时候用 bus ，数据复杂的时候用 vuex
// Vue.prototype.$bus = new Vue()
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
	$eventBus: {
		get: function() {
			return EventBus
		}
	}
})

new Vue({
	i18n,
	router,
	render: h => h(App),
}).$mount('#app')
