import Vue from 'vue'
import Vuex from 'vuex'
import friend from './modules/friend'
import message from './modules/message'
import addressData from '@/static/address'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		addressData:addressData,
		
    },
	actions:{
		regist({ dispatch, commit }, params) {
		    state.messageListData = prop;
		},
		
	},
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		
    },
	modules: {
		friend,
		message
	}
})

export default store
