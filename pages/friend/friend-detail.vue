<template>
    <view class="friend-detail hole">
    	<view class="friend-detail-top">
    		<view class="friend-detail-top-left">
    			<view class="user-img">
    				{{imgeName}}
    			</view>
    		</view>
			<view class="friend-detail-top-right">
				<view class="friend-detail-top-right-top">
					<view class="user-name">
						{{userName}}
					</view>
					<view class="dian-zan">
						<uni-icons
						 type="checkbox-filled"
						 size="25" 
						 color="#666666"/>
						 <!-- <view class="dian-zan-icon">
						 	点赞图
						 </view> -->
						 <view class="dian-zan-number">
						 	{{dianZanNum}}
						 </view>
					</view>
				</view>
				<view class="friend-detail-top-right-middle">
					QQ: {{qqNumber}}
				</view>
				<view class="friend-detail-top-right-bottom">
					{{sex}} {{address}} {{xingZuo}}
				</view>
			</view>
    	</view>
		<view class="friend-detail-middle">
			<view class="user-info-card">
				<view class="edit-icon-left">
					<uni-icons
					 type="compose" 
					 
					 size="20" 
					 color="#666666" />
				</view>
				<text class="">
					{{qianMing}}
				</text>
				<view class="edit-icon-right">
					<uni-icons
					 type="arrowright"
					 class="edit-icon-right"
					 size="20" 
					 color="#666666" />
				</view>
			</view>
			<view class="user-info-card">
				
			</view>
		</view>
		<view class="friend-detail-bottom">
			
		</view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
		data(){
		  return {
			  navTitle:"联系人",
			  imgeName:"杨",
			  userName:"杨洋",
			  qqNumber:"986699180",
			  sex:"男",
			  address:"阿富汗-科布尔",
			  xingZuo:"巨蟹座",
			  dianZanNum:12345,
			  qianMing:"wia"
		  }
		},
        computed: {
			
        },
        methods: {
            
        },
		components:{
		}
    }
</script>

<style lang="scss">
.friend-detail {
  padding: 0 20rpx;
  background-color: #FFFFFF;
  >uni-view {
	  margin-bottom: 10px;
  }
  &-top {
	  height: 70px;
	  background-color: green;
	  display: flex;
	  flex-direction: row;
	  >uni-view {
	  }
	  &-left {
		  width: 80px;
		  background-color: red;
		  .user-img {
			  width: 70px;
			  height: 70px;
			  background-color: blue;
			  border-radius:44px;
			  line-height: 70px;
			  text-align: center;
			  font-size: 40px;
		  }
	  }
	  &-right {
		  width: calc(100% - 80px);
		  background-color: pink;
		  font-size: 14px;
		  line-height: 18px;
		  &-top {
			  height: 35px;
			  display: flex;
			  .user-name {
				  font-size: 25px;
				  line-height: 35px;
				  font-weight: 550;
				  flex: 1;
				  uni-view {
					  line-height: 20px;
				  }
			  }
			  .dian-zan {
				  text-align: center;
				  width: 50px;
				  .dian-zan-icon {
					  height: 25px;
					  line-height: 25px;
				  }
				  .dian-zan-number {
					  height: 10px;
					  line-height: 10px;
				  }
			  }
		  }
		  &-middle {
			  height: 17px;
			  
		  }
		  &-bottom {
			  height: 17px;
		  }
	  }
  }
  &-middle {
	  height: 110px;
	  background-color: yellow;
	  .user-info-card {
		  background-color: darkblue;
		  height: 40px;
		  line-height: 40px;
		  display: flex;
		  > uni-view {
			  width: 60rpx;
		  } 
		  > uni-text {
			  flex: 1;
		  }
	  }
  }
  &-bottom {
  	  height: 44px;
  	  background-color: lightblue;
	  position: fixed;
	  width: 100%;
	  bottom: 0;
  }
}
</style>
