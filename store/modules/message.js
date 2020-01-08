const state = {
    messageListData:[],
	messageDetailData:[],
	messageDetailTarget:{
		name:"",
		id:""
	}
}

const getters = {

}

const actions = {
	getMessageListData({ dispatch, commit }, params) {
		let mockData=[
		  {    userName:"王",
			   title:"这是人名",
			   time:"下午1:00",
			   info:"人生不满百，常怀千岁忧",
			   messageNum:"18",
		  },
		  {  userName:"王",
		     title:"这是人名",
		     time:"下午1:00",
		     info:"人生不满百，常怀千岁忧",
		     messageNum:"18",
		  },
		]
		commit("setMessageListData",mockData);
	},
	getMessageDetailData({ dispatch, commit }, params) {
		let mockData=[
			{
				person:0,
				content:"H5版常见问题参考",
				name:"JO"
			},
			{
				person:1,
				content:"我自横刀向天笑，去留肝胆两昆仑",
				name:"JO"
			},
		];
		commit("setMessageDetailData",mockData);
		commit("setMessageDetailTarget",{name:"对方",id:"986699180"});
	},
	sendMessage({ dispatch, commit }, params) {
		commit("addMessageDetailData",mockData);
	}
}

const mutations = {
    setMessageListData(state, prop) {
        state.messageListData = prop;
    },
	setMessageDetailData(state, prop) {
	    state.messageDetailData = prop;
	},
	setMessageDetailTarget(state, prop) {
		state.messageDetailTarget = prop;
	},
	addMessageDetailData(state, prop) {
		state.messageDetailData.push({
			name:"JO",
			content:prop.content,
			person:1,
		});
	}
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}