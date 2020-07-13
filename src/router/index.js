import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '/',
		component: () => import( '../views/Content/Shopping' )
	},
	{
		path: '/shopping',
		name: 'Shopping',
		component: () => import(/* webpackChunkName: "about" */ '../views/Content/Shopping')
	},
	{
		path: '/game',
		name: 'Game',
		component: () => import( '../views/Content/Game' )
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
