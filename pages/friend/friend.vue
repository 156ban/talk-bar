<template>
    <view class="friend hole">
    	<div class="status-bar"></div>
    	<nav-bar
    	 :navTitle="navTitle"/>
    	<view class="content">
    		<view @tap="goNewFriend" class="new-friend" hover-class="press-on">
				<view>新朋友</view>
    			<view><uni-icons class="input-uni-icon" type="arrowright" size="16" color="#666666" /></view>
    		</view>
    	</view>
		<view class="friend-card-group">
			<view 
				v-for="(item,index) in friendListData"
				 @tap="goDetail(item.ID)"
				 :key="index">
				 <friend-card
				   :userName="item.name"
				   :title="item.name"
				   :info="item.saying">
				 </friend-card>
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
	import  friendCard from '@/components/aa-my-com/friend-card.vue'
    export default {
		data(){
		  return {
			  navTitle:"联系人",
			  friendListData:[],
			  mockData:[{
				  userName:"花",
				  title:"桃花仙人",
				  info:"本来无一物，何处惹尘埃",
			  }]
		  }
		},
        computed: {
			// ...mapState('friend', [
			//     'friendListData',
			//   ]),
			...mapState([
				'ID'
			  ]),
        },
        methods: {
            goDetail(ID) {
            	uni.navigateTo({
            		url: '../friend/friend-detail?ID='+ID
            	});
            },
			goNewFriend() {
				uni.navigateTo({
					url: '../friend/new-friend'
				});
			},
			getFriendList() {
				this.$get('/friend/getfriendList',{ID:this.ID})
				.then((value)=>{
					this.friendListData = value.data;
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
			navBar,friendCard
		},
		onShow() {
			this.getFriendList();
		}
    }
</script>

<style lang="scss">
.friend {
  .new-friend {
	  height: 46px;
	  background-color: #FFFFFF;
	  margin: 10px 0;
	  line-height: 46px;
	  font-size: 16px;
	  display: flex;
	  justify-content: space-between;
	  padding:0 20rpx;
  }
  .friend-card-group {
	  background-color: #FFFFFF;
  }
  .status-bar {
  		height: var(--status-bar-height);
  		min-height: 25px;
  		background-color: #0faeff;
  	}
  	
  .hello {
  	display: flex;
  	flex: 1;
  	flex-direction: column;
  }
}

</style>
