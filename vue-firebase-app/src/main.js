import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import auth from './auth'
import db from './db'
import axios from 'axios'
import mixins from './mixins'
import filters from './filters'
import directives from './directives'
import components from './components'

// register components
for (let key in components) Vue.component(key, components[key])

// filters
Object.keys(filters).forEach((name) => {
	Vue.filter(name, filters[name]);
})

// directive
Object.keys(directives).forEach((name) => {
	Vue.directive(name, directives[name]);
})

// mixins
Vue.mixin(mixins)

Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$http = axios

auth.init().then(() => {
	new Vue({
		store,
		router,
		...App
	}).$mount('#app')
})
