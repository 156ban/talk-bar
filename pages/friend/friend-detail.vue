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
						{{userData.name}}
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
					QQ: {{userData.ID}}
				</view>
				<view class="friend-detail-top-right-bottom">
					{{userData.sex}} {{userData.province}}-{{userData.city}} {{userData.xingZuo}}
				</view>
			</view>
    	</view>
		<view class="friend-detail-middle">
			<view class="user-info-card" hover-class="press-on">
				<view class="edit-icon-left">
					<uni-icons
					 type="compose" 
					 size="20" 
					 color="#666666" />
				</view>
				<text class="">
					{{userData.saying}}
				</text>
				<view class="edit-icon-right">
					<uni-icons
					 type="arrowright"
					 class="edit-icon-right"
					 size="20" 
					 color="#666666" />
				</view>
			</view>
			<view class="user-info-card" hover-class="press-on">
				<view class="edit-icon-left">
					<uni-icons
					 type="compose" 
					 size="20" 
					 color="#666666" />
				</view>
				<text class="">
					{{userData.saying}}
				</text>
				<view class="edit-icon-right">
					<uni-icons
					 type="arrowright"
					 class="edit-icon-right"
					 size="20" 
					 color="#666666" />
				</view>
			</view>
		</view>
		<view class="friend-detail-bottom">
			<button v-if="!isFriend" class="bottom-btn" type="default" size="mini">添加好友</button>
			<button v-else  class="bottom-btn" type="default" size="mini">删除好友</button>
			<button @tap="goEditInfo()" class="bottom-btn" type="default" size="mini">编辑资料</button>
			<button @tap="goMessageDetail()" class="bottom-btn" type="primary" size="mini">发消息</button>
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
			  qianMing:"wia",
			  isFriend:true,
			  isUser:true,
			  userData:{
			  	ID:"",
			  	province:"",
			  	xingZuo:"",
			  	province:"",
			  	city:"",
			  	name:"",
			  	age:"",
			  	saying:"",
			  	sex:"",
			  	newPassword:"",
			  	rePassword:""
			  }
		  }
		},
        computed: {
			...mapState('friend', [
			    'friendListData',
				'friendDetailTarget'
			  ]),
			...mapState([
				'ID'
			  ]),
        },
        methods: {
            goMessageDetail() {
				uni.navigateTo({
					url: '../message/message-detail'
				});
			},
			goEditInfo() {
				uni.navigateTo({
					url: '../user/edit-info'
				});
			},
			getRequest() {
				this.loading = true;
				this.userData['ID'] = this.ID;
				uni.request({
					url: "http://localhost:8080/user/getUserInfo",
					method:'get',
					data: {ID:this.ID}
				}).then(res => {
					
					console.log('request success', res[1].data);
					if(res[1].data.code == 0) {
						uni.showToast({
							title: res[1].data.msg,
							icon: 'none',
							// mask: true,
						});
						for(let key in this.userData) {
							if(res[1].data.data[key]) {
								this.userData[key] = res[1].data.data[key];
							}
						}
						this.userData.newPassword="",
						this.userData.rePassword=""
					} else {
						uni.showToast({
							title: res[1].data.msg,
							icon: 'none',
							// mask: true,
						});
					}
					
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
			        
					this.loading = false;
				});
			},
        },
		components:{
		},
		onLoad() {
			this.$store.dispatch("friend/getFriendDetailData");
			this.getRequest();
		}
    }
</script>

<style lang="scss">
.friend-detail {
  padding: 0 20rpx;
  background-color: #FFFFFF;
  >uni-view {
	  margin-top: 10px;
  }
  &-top {
	  height: 70px;
	  display: flex;
	  flex-direction: row;
	  >uni-view {
	  }
	  &-left {
		  width: 80px;
		  .user-img {
			  width: 70px;
			  height: 70px;
			  border-radius:44px;
			  line-height: 70px;
			  text-align: center;
			  font-size: 40px;
			  background-color: pink;
		  }
	  }
	  &-right {
		  width: calc(100% - 80px);
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
				  display: flex;
				  width: 80px;
				  line-height: 35px;
				  .dian-zan-icon {
					  height: 35px;
				  }
				  .dian-zan-number {
					  height: 35px;
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
	  .user-info-card {
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
  	  background-color: #efeff4;
	  position: fixed;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  display: flex;
	  align-items: center;
	  .bottom-btn {
		  justify-content: space-around;
		  height: 34px;
		  width: 220rpx;
		  line-height: 34px;
		  border: none;
	  }
  }
}
</style>
