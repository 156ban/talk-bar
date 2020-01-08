<template>
	    <view class="hole message-detail">
			<view v-for="(item,index) in messageDetailData" :key="index">
				<detail-card
				  :key="index"
				  :name="item.name"
				  :person="item.person"
				  :content="item.content">
				</detail-card>
			</view>
			<detail-card :person="1" content="H5版常见问题参考"></detail-card>
			<detail-card></detail-card>
			<detail-card></detail-card>
			<detail-card></detail-card>
			<detail-card :person="1"></detail-card>
			<detail-card></detail-card>
			<detail-card :person="1"></detail-card>
			<detail-card></detail-card>
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
				sendData:""
			}
		},
		computed: {
		    ...mapState('message', [
		        'messageDetailData',
				'messageDetailTarget'
		      ]),
		},
		watch:{
			messageDetailTarget:function(){
				uni.setNavigationBarTitle({
				　　title:this.messageDetailTarget.name
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
				this.$store.commit("message/addMessageDetailData", {content:this.sendData});
			}
		},
		components:{
			detailCard
		},
		onLoad() {
			this.$store.dispatch("message/getMessageDetailData");
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
