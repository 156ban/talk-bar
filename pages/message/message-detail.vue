<template>
	    <view class="hole message-detail">
			<detail-card></detail-card>
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
				  auto-height />
				<button type="primary" class="message-detail-button">发送</button>
			</view>
			<view class="zhanWei">
				
			</view>
	    </view>
</template>

<script>
	import detailCard from '@/components/aa-my-com/detail-card.vue'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			
		},
		methods:{
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		},
		components:{
			detailCard
		}
	}
</script>

<style lang="scss">
	.message-detail {
		&-bottom {
			margin:0 20rpx;
			display: flex;
			position: fixed;
			padding-top: 10px;
			bottom: 0;
			width: calc(100% - 40rpx);
			background-color: #efeff4;
			.message-detail-input {
				border:1px solid gray;
				border-radius: 15px;
				padding:0 8px;
				max-height: 120px;
				min-height: 30px;
				line-height: 30px;
				width: 520rpx;
			}
			.message-detail-button {
				height: 30px;
				width: 140rpx;
				font-size: 12px;
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}
		.zhanWei {
			height: 50px;
		}
	}
</style>
