import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
import uniIcons from '@/components/uni-icons/uni-icons.vue'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import uniSection from '@/components/uni-section/uni-section.vue'
import uniStatusBar from '@/components/uni-status-bar/uni-status-bar.vue';
import uniBadge from '@/components/uni-badge/uni-badge.vue'
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
Vue.component('uni-icons', uniIcons)
Vue.component('uni-nav-bar', uniNavBar)
Vue.component('uni-section', uniSection)
Vue.component('uni-status-bar', uniStatusBar)
Vue.component('uniBadge',uniBadge)
Vue.component('uniSearchBar',uniSearchBar)
App.mpType = 'app'



const app = new Vue({
    store,
	components:{
		uniIcons,uniNavBar,uniSection,uniStatusBar
	},
    ...App
})
app.$mount()
