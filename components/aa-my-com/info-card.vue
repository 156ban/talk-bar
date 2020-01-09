<template>
	<view class="message-card" hover-class="press-on" >
			<view class="message-card-left">{{userName}}</view>
			<view class="message-card-right">
				<view class="message-card-top">
					<view class="message-card-title">{{title}}</view>
					<view class="message-card-time">
						{{time}}
					</view>
				</view>
				<view class="message-card-bottom"> 
					<view class="message-card-info">
						{{info}}
					</view>
					<view class="message-card-num">
						<uni-badge class="message-card-num-badge" :text="messageNum" type="error" />
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		props: {
			time: {
				type: String,
				default: '上午11:00'
			},
			info: {
				type: String,
				default: 'aasdaAAaaa啊啊啊'
			},
			userName: {
				type: String,
				default: '杨'
			},
			title: { // small.normal
				type: String,
				default: '啊实打实'
			},
			messageNum: { 
				type: String,
				default: '99+'
			},
		},
		methods:{
			goDetail() {
				uni.navigateTo({
					url: '../message/message-detail'
				});
			}
		}
	}
</script>

<style lang="scss">
	
	.message-card {
		width: calc(100% - 40rpx);
		height: 120rpx;
		padding:30rpx 20rpx;
		display: flex;
		flex-direction: row;
	}
	.message-card-left {
		height: 100%;
		width: 120rpx;
		background-color: blue;
		border-radius:60rpx;
		line-height: 120rpx;
		text-align: center;
	}
	.message-card-right {
		height: 100%;
		margin-left: 20rpx;
		-webkit-flex: 1;
		flex: 1;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
		.message-card-top {
			height: 45rpx;
			line-height: 45rpx;
			display: flex;
			.message-card-title {
			   font-size: 38rpx;
			   width: calc(100% - 140rpx);
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
			.message-card-time {
				font-size: 30rpx;
				text-align: right;
				width: 140rpx;
				color: #9a9494;
			}
		}
		.message-card-bottom {
			height: 45rpx;
			display: flex;
			.message-card-info {
			   font-size: 30rpx;
			   width: calc(100% - 140rpx);
			   color: #9a9494;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
			.message-card-num {
			   font-size:30rpx;
			   text-align: right;
			   width: 140rpx;
			   .message-card-num-badge {
				   height: 45rpx;
				   font-size:30rpx;
				   line-height: 45rpx;
			   }
			}
		}
	}
	.press-on {
	    background-color: #efeff4;
	}
</style>
