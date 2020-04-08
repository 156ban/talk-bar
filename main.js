import Vue from 'vue'
import App from './App'
import store from './store'
import io from 'socket.io-client'



Vue.config.productionTip = false
import {post, get} from './tool.js';
Vue.prototype.$post = post;
Vue.prototype.$get = get;
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
let socket = io("ws://localhost:8080"); // 建立链接
		// 此时会触发后台的connect事件
		socket.on('msg',function(data){ // 监听服务端的消息“msg”
		    console.log('收到服务器消息');
		    socket.emit('msg', {rp:"收到服务器消息"}); //向服务器发送消息
		    console.log(data);
		});
console.log('运行了');


const app = new Vue({
    store,
	components:{
		uniIcons,uniNavBar,uniSection,uniStatusBar
	},
    ...App
})
app.$mount()
