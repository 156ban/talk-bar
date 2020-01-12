import Vue from 'vue'
import Vuex from 'vuex'
import friend from './modules/friend'
import message from './modules/message'
import addressData from '@/static/address'
import xingZuoData from '@/static/xingZuo'
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
		xingZuoData:xingZuoData,
    },
	actions:{
		regist({ dispatch, commit }, params) {
		    state.messageListData = prop;
		},
		subUserInfo({ dispatch, commit }, params) {
		    console.log("上传用户信息");
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
