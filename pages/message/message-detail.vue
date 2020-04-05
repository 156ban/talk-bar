<template>
	    <view class="hole message-detail">
			<view v-for="(item,index) in messageDetailData" :key="index">
				<detail-card
				  :key="index"
				  :name="item.sender===ID?userName:friendInfo.name"
				  :person="item.sender===ID?1:0"
				  :ID="item.sender===ID?ID:friendInfo.ID"
				  :content="item.message">
				</detail-card>
			</view>
			<view class="message-detail-bottom">
				<textarea 
				  class="message-detail-input"
				  v-model="sendData"
				  auto-height />
				<button 
				  type="primary" 
				  class="message-detail-button"
				  @tap="sendMessage()">
				  发送
				</button>
			</view>
			<view class="zhanWei">
				
			</view>
	    </view>
</template>

<script>
	import detailCard from '@/components/aa-my-com/detail-card.vue'
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				sendData:"",
				friendInfo:{},
				messageDetailData:[]
			}
		},
		computed: {
		    ...mapState('message', [
		      ]),
			...mapState([
				'ID','userName'
			]),
		},
		watch:{
			messageDetailTarget:function(){
				uni.setNavigationBarTitle({
				　　title:this.messageDetailTarget.name
				})
			},
			messageDetailData() {
			      this.$nextTick(() => {
			        uni.pageScrollTo({
			                    duration:0,
			                    scrollTop:parseInt(getComputedStyle(this.$el).height)
			        })
			      })
			    }
		},
		methods:{
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			},
			sendMessage() {
				if(this.sendData==="") {
					return;
				}
				this.$get('/message/sendMessage',
				{
					 sender:this.ID,
					 reciever:this.friendInfo.ID,
					 message:this.sendData,
					 time:new Date()
				})
				.then((value)=>{
					this.getList();
					this.sendData = "";
				})
				.catch((err)=>{
					uni.showToast({
						title: err,
						icon: 'none',
						// mask: true,
					});
					console.log(err);
				})
			},
			getList() {
				this.$get('/message/getMessageDetail',{IDA:this.ID,IDB:this.friendInfo.ID})
				.then((value)=>{
					this.messageDetailData = value.data;
				})
				.catch((err)=>{
					uni.showToast({
						title: err,
						icon: 'none',
						// mask: true,
					});
					console.log(err);
				})
			}
		},
		components:{
			detailCard
		},
		onLoad(option) {
			this.$store.dispatch("message/getMessageDetailData");
			this.friendInfo = JSON.parse(option.friendInfo);
			console.log(this.friendInfo);
		},
		onShow() {
			this.getList();
		}
	}
</script>

<style lang="scss">
	.message-detail {
		&-bottom {
			margin:0 20rpx;
			display: flex;
			position: fixed;
			padding: 10px 0;
			bottom: 0;
			width: calc(100% - 40rpx);
			background-color: #efeff4;
			.message-detail-input {
				border-radius: 15px;
				padding:0 8px;
				max-height: 120px;
				min-height: 30px;
				line-height: 30px;
				width: 520rpx;
				background-color: #FFFFFF;
			}
			.message-detail-button {
				height: 32px;
				width: 140rpx;
				font-size: 12px;
				position: absolute;
				bottom: 10px;
				right: 0;
				border-radius: 30px;
			}
		}
		.zhanWei {
			height: 50px;
		}
	}
</style>
