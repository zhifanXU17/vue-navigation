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
		component: () => import( '../views/Life' )
	},
	{
		path: '/life#购物',
		redirect: {
			name: 'Shopping',
		}
	},
	{
		path: '/life#便利',
		redirect: {
			name: 'Shopping',
		}
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
	// eslint-disable-next-line no-unused-vars
	scrollBehavior (to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	routes,
})

export default router
