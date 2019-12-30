<template>
	<view class="message-card">
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
						<uni-badge :text="messageNum" type="error" />
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
	}
</script>

<style lang="scss">
	.message-card {
		width: 100%;
		height: 46px;
		margin-bottom: 24px;
		display: flex;
		flex-direction: row;
	}
	.message-card-left {
		height: 100%;
		width: 46px;
		background-color: blue;
		border-radius:46px;
		line-height: 46px;
		text-align: center;
	}
	.message-card-right {
		height: 30px;
		margin-left: 20rpx;
		-webkit-flex: 1;
		flex: 1;
		padding-top: 9px;
		padding-bottom: 7px;
		.message-card-top {
			height: 15px;
			line-height: 15px;
			.message-card-title {
			   font-size: 15px;
			   display: inline-block;
			   width: calc(100% - 56px);
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
			.message-card-time {
				font-size: 12px;
				text-align: right;
				display: inline-block;
				width: 56px;
				color: #9a9494;
			}
		}
		.message-card-bottom {
			height: 15px;
			.message-card-info {
			   font-size: 13px;
			   display: inline-block;
			   width: calc(100% - 56px);
			   color: #9a9494;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
			.message-card-num {
			   font-size: 12px;
			   text-align: right;
			   display: inline-block;
			   width: 56px;
			}
		}
	}
	
</style>
