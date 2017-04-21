import Vue from 'vue'
import firebase from 'firebase'
import auth from '../auth'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'

Vue.use(Router)

const loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
}

export default new Router({
	mode: 'history',
	base: '/',
	linkActiveClass: 'is-active',
	routes: [
    	{
			path: '/',
			name: 'index',
			component: IndexPage
    	},
    	{
			path: '/login',
			name: 'login',
			component: IndexPage,
			beforeEnter: (to, from, next) => {
				return loginWithGoogle()
			}
    	},
    	{
			path: '/logout',
			name: 'logout',
			component: IndexPage,
			beforeEnter: (to, from, next) => {
				auth.signout()
			}
    	},

  	]
})
