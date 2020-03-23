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
					{{userData.ID}}
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
					{{userData.ID}}
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
			<button v-else @tap="togglePopup('bottom', 'popup')"  class="bottom-btn" type="default" size="mini">删除好友</button>
			<button v-if="isMe" @tap="goEditInfo()" class="bottom-btn" type="default" size="mini">编辑资料</button>
			<button @tap="goMessageDetail()" class="bottom-btn" type="primary" size="mini">发消息</button>
		</view>
		<uni-popup ref="showpopup" :type="type" >
			<view class="popup-content">
				<button type="warn" @tap="delFriend()">删除好友</button>
				<button @tap="closePopup">取消</button>
			</view>
		</uni-popup>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import uniPopup from '@/components/uni-popup/uni-popup.vue'
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
			  isMe:true,
			  friendID:"",
			  type:"",
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
			closePopup() {
				this.$nextTick(() => {
					this.$refs['showpopup'].close()
					// console.log(this.$refs['showpopup']);
				})
			},
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
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
			getRequest(ID=this.ID) {
				this.loading = true;
				this.userData['ID'] = ID;
				this.$get('/user/getUserInfo',{ID:ID})
				.then((value)=>{
					uni.showToast({
						title: value.msg,
						icon: 'none',
						mask: true,
					});
					for(let key in this.userData) {
						if(value.data[key]) {
							this.userData[key] = value.data[key];
						}
					}
					this.userData.newPassword="";
					this.userData.rePassword="";
					this.loading = false;
				}).catch((reason)=>{
					uni.showToast({
						title: reason,
						icon: 'none',
						// mask: true,
					});
					this.loading = false;
				})
			},
			analFriend(ID) {
				this.loading = true;
				this.$get('/friend/analFriend',{IDA:ID,IDB:this.ID})
				.then((value)=>{
					this.isFriend = value.status;
					this.loading = false;
				}).catch((reason)=>{
					uni.showToast({
						title: reason,
						icon: 'none',
						// mask: true,
					});
					this.loading = false;
				})
			},
			delFriend() {
				this.loading = true;
				this.$get('/friend/delFriend',{IDA:this.friendID,IDB:this.ID})
				.then((value)=>{
					uni.showToast({
						title: value.msg,
						icon: 'none',
						// mask: true,
					});
					this.loading = false;
					uni.navigateBack()
				}).catch((reason)=>{
					uni.showToast({
						title: reason,
						icon: 'none',
						// mask: true,
					});
					this.loading = false;
				})
			}
        },
		components:{
			uniPopup
		},
		onLoad(option) {
			this.$store.dispatch("friend/getFriendDetailData");
			if(option.ID) {
				this.getRequest(option.ID);
				this.analFriend(option.ID);
				this.friendID = option.ID;
				this.isMe = false;
			} else {
				this.getRequest();
				this.isMe = true;
			}
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
  .popup-content {
  	/* #ifndef APP-NVUE */
  	display: block;
  	/* #endif */
  	background-color: #fff;
  	font-size: 14px;
  }
}
</style>
