import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import( '../views/Life' )
	},
	{
		path: '/life',
		name: 'Shopping',
		component: () => import(/* webpackChunkName: "about" */ '../views/Life')
	},
	{
		path: '/entertain',
		name: 'Entertain',
		component: () => import( '../views/Entertain' )
	},
	{
		path: '/study',
		name: 'Study',
		component: () => import( '../views/Study' )
	},
	{
		path: '/travel',
		name: 'Travel',
		component: () => import(  '../views/Travel' )
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
