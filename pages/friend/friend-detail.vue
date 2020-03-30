<template>
    <view class="friend-detail hole">
    	<view class="friend-detail-top">
    		<view class="friend-detail-top-left">
    			<view class="user-img">
    				{{userData.name.slice(0,1)}}
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
			<view class="user-info-card">
				{{userData.saying}}
			</view>
		</view>
		<view class="friend-detail-bottom">
			<button v-if="(!isFriend) && (!isMe)" @ @tap="addFriend" type="default" size="mini">添加好友</button>
			<button v-else-if="!isMe" @tap="togglePopup('bottom', 'popup')"  class="bottom-btn" type="default" size="mini">删除好友</button>
			<button v-if="isMe" @tap="goEditInfo()" class="bottom-btn" type="default" size="mini">编辑资料</button>
			<button v-if="!isMe" @tap="goMessageDetail()" class="bottom-btn" type="primary" size="mini">发消息</button>
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
			  friendID:"",
			  type:"",
			  userData:{
			  	ID:"",
			  	province:"",
			  	xingZuo:"",
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
			  isMe() {
				  return this.ID === this.friendID;
			  }
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
			analFriend() {
				this.loading = true;
				this.$get('/friend/analFriend',{IDA:this.friendID,IDB:this.ID})
				.then((value)=>{
					this.isFriend = value.data.status;
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
			},
			addFriend() {
				this.loading = true;
				this.$get('/friend/addFriend',{IDA:this.friendID,IDB:this.ID})
				.then((value)=>{
					uni.showToast({
						title: value.msg,
						icon: 'none',
						// mask: true,
					});
					this.loading = false;
					this.analFriend(this.friendID);
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
				this.friendID = option.ID;
				this.isMe = false;
			} else {
				this.getRequest();
				this.isMe = true;
			}
		},
		onShow() {
			this.analFriend();
			this.getRequest();
		}
    }
</script>

<style lang="scss">
.friend-detail {
  padding: 0 20rpx;
  background-color: #FFFFFF;
  >uni-view {
	  margin-top: 25rpx;
  }
  &-top {
	  height: 210rpx;
	  display: flex;
	  flex-direction: row;
	  >uni-view {
	  }
	  &-left {
		  width: 200rpx;
		  .user-img {
			  width: 200rpx;
			  height: 200rpx;
			  border-radius:110rpx;
			  line-height: 200rpx;
			  text-align: center;
			  font-size: 100rpx;
			  background-color: pink;
		  }
	  }
	  &-right {
		  width: calc(100% - 200rpx);
		  font-size: 35rpx;
		  line-height: 18px;
		  &-top {
			  height: 87.5rpx;
			  display: flex;
			  .user-name {
				  font-size: 62.5rpx;
				  line-height: 87.5rpx;
				  font-weight: 550;
				  flex: 1;
				  uni-view {
					  line-height: 30rpx;
				  }
			  }
			  .dian-zan {
				  text-align: center;
				  display: flex;
				  width: 200rpx;
				  line-height: 87.5rpx;
				  .dian-zan-icon {
					  height: 87.5rpx;
				  }
				  .dian-zan-number {
					  height: 87.5rpx;
				  }
			  }
		  }
		  &-middle {
			  height: 42.5rpx;
			  
		  }
		  &-bottom {
			  height: 42.5rpx;
		  }
	  }
  }
  &-middle {
	  height: 275rpx;
	  background-color:#dddddd;
	  border-radius: 15rpx;
	  .user-info-card {
		  word-break: keep-all;
	  }
  }
  &-bottom {
  	  height: 110rpx;
  	  background-color: #efeff4;
	  position: fixed;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  display: flex;
	  align-items: center;
	  .bottom-btn {
		  justify-content: space-around;
		  height: 85rpx;
		  width: 220rpx;
		  line-height: 85rpx;
		  border: none;
	  }
  }
  .popup-content {
  	/* #ifndef APP-NVUE */
  	display: block;
  	/* #endif */
  	background-color: #fff;
  	font-size: 35rpx;
  }
}
</style>
