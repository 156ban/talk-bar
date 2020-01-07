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
			 @tap="goDetail()">
			 <friend-card></friend-card>
			</view>
			<friend-card></friend-card>
			<friend-card></friend-card>
			<friend-card></friend-card>
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
			  navTitle:"联系人"
		  }
		},
        computed: {
        },
        methods: {
            goDetail() {
            	uni.navigateTo({
            		url: '../friend/friend-detail'
            	});
            },
			goNewFriend() {
				uni.navigateTo({
					url: '../friend/new-friend'
				});
			}
        },
		components:{
			navBar,friendCard
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
  .press-on {
      background-color: #dde1e8;
  }
}

</style>
