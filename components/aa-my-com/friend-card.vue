<template>
	<view class="friend-card" hover-class="press-on">
			<view class="friend-card-left">{{userName}}</view>
			<view class="friend-card-right">
				<view class="friend-card-top">
					<view class="friend-card-title">{{title}}</view>
				</view>
				<view class="friend-card-bottom"> 
					<view class="friend-card-info">
						{{info}}
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
				default: '不见五陵豪杰墓,无花无酒锄作田'
			},
			userName: {
				type: String,
				default: '杨'
			},
			title: { // small.normal
				type: String,
				default: '唐伯虎'
			},
		},
	}
</script>

<style lang="scss">
	
	.friend-card {
		width: calc(100% - 40rpx);
		height: 36px;
		padding:12px 20rpx;
		display: flex;
		flex-direction: row;
		border-radius: 5px;
	}
	.friend-card-left {
		height: 100%;
		width: 36px;
		background-color: blue;
		border-radius:36px;
		line-height: 36px;
		text-align: center;
	}
	.friend-card-right {
		height: 30px;
		margin-left: 20rpx;
		-webkit-flex: 1;
		flex: 1;
		padding-top: 3px;
		padding-bottom: 3px;
		.friend-card-top {
			height: 15px;
			line-height: 15px;
			.friend-card-title {
			   font-size: 15px;
			   display: inline-block;
			   width: 100%;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
		}
		.friend-card-bottom {
			height: 15px;
			.friend-card-info {
			   font-size: 12px;
			   display: inline-block;
			   width: 100%;
			   color: #9a9494;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
		}
	}
	.press-on {
	    background-color: #d6d6d6;
	}
</style>