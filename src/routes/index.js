import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'

Vue.use(Router)

const routerInstance = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		name: 'home',
		component: home
	}, {
		path: '/ours',
		name: 'ours',
		component: () =>
			import ('@/pages/ours.vue')
	}]
})

export default routerInstance