const state = {
    friendListData:[],
	friendDetailData:[],
	friendDetailTarget:{
		name:"",
		id:""
	},
	newFriendListData:[],
}

const getters = {
   
}

const actions = {
	getFriendListData({ dispatch, commit }, params) {
		let mockData=[{
				  userName:"花",
				  title:"桃花仙人",
				  info:"本来无一物，何处惹尘埃",
			  }]
		commit("setFriendListData",mockData);
	},
	getFriendDetailData({ dispatch, commit }, params) {
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
		commit("setFriendListData",mockData);
		commit("setFriendDetailTarget",{
			name:"杨洋",
			id:"986699180"
		});
	},
	getNewFriendListData({ dispatch, commit }, params) {
		let mockData=[{
				  userName:"花",
				  title:"桃花仙人",
				  info:"本来无一物，何处惹尘埃",
			  }]
		commit("setNewFriendListData",mockData);
	},
	addNewFrend({ dispatch, commit }, params) {
		let mockData=[{
				  userName:"花",
				  title:"桃花仙人",
				  info:"本来无一物，何处惹尘埃",
			  }]
		commit("setNewFriendListData",mockData);
	},
}

const mutations = {
    setFriendListData(state, prop) {
        state.friendListData = prop;
    },
    setFriendDetailData(state, prop) {
        state.friendDetailData = prop;
    },
    setFriendDetailTarget(state, prop) {
    	state.friendDetailTarget = prop;
    },
	setNewFriendListData(state, prop) {
    	state.newFriendListData = prop;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}