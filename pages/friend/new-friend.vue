<template>
    <view class="new-friend-page hole">
    	<view class="content">
    		<view class="new-friend-title" >
				<uni-search-bar 
				  radius="100" 
				  placeholder="搜索"
				  v-model="searchID"
				  class="new-friend-search"/>
    		</view>
			<view class="person-group">
				<view 
				  v-for="(item,index) in this.userListData"
				  @tap="goDetail(item.ID)"
				  :key="index">
				  <person-card
				    :userName="item.name"
					:title="item.saying"
					:sex="item.sex"
					:age="item.age"
					:address="item.province +' '+item.city">
				  </person-card>
				</view>
			</view>
    	</view>
		
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import  navBar from '@/components/aa-my-com/nav-bar.vue'
	import  personCard from '@/components/aa-my-com/person-card.vue'
    export default {
		data(){
		  return {
			  navTitle:"联系人",
			  userListData:[],
			  searchID:"",
			  mockData:[
				  {
				    userName:"王",
					title:"朱高帜",
					sex:"女",
					age:"25",
					address:"美国 家里蹲",
				  },
			  ]
		  }
		},
        computed: {
			...mapState('friend', [
			    'newFriendListData'
			  ]),
        },
		watch:{
			searchID() {
				this.searchUser();
			}
		},
        methods: {
            goDetail(ID) {
            	uni.navigateTo({
            		url: '../friend/friend-detail?ID='+ID
            	});
            },
			searchUser() {
				console.log('触发');
				this.$get('/user/getUserInfo',{ID:this.searchID.value})
				.then((value)=>{
					console.log(value);
					this.userListData = value.data?[value.data]:[];
					uni.showToast({
						title: value.msg,
						icon: 'none',
						// mask: true,
					});
				}).catch((reason)=>{
					uni.showModal({
						content: reason,
						showCancel: false
					});
				})
			}
        },
		components:{
			navBar,personCard
		},
		onLoad() {
			this.$store.dispatch("friend/getNewFriendListData");
		}
    }
</script>

<style lang="scss">
.new-friend-page {
  background-color: #FFFFFF;
  .new-friend-search {
	  padding-left:30rpx;
	  padding-right:30rpx;
  }
  .person-group {
	  margin-top: 25px;
  }
  .press-on {
      background-color: #efeff4;
  }
}

</style>