<template>
	<view class="person-card" hover-class="press-on">
			<view class="person-card-left">{{userName}}</view>
			<view class="person-card-right">
				<view class="person-card-top">
					<view class="person-card-title">{{title}}</view>
				</view>
				<view class="person-card-bottom"> 
				    <view class="person-card-age">
				    	男 {{age}}
				    </view>
					<view class="person-card-address">
						{{address}}
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
			address: {
				type: String,
				default: '广东 广州'
			},
			userName: {
				type: String,
				default: '杨'
			},
			title: { // small.normal
				type: String,
				default: '唐伯虎'
			},
			age: {
				type: Number,
				default: 18
			}
		},
	}
</script>

<style lang="scss">
	
	.person-card {
		width: calc(100% - 40rpx);
		height: 36px;
		padding:12px 20rpx;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #d0cccc;
		&:last-child {
			border-bottom: 1px solid #d0cccc;
		}
	}
	.person-card-left {
		height: 100%;
		width: 36px;
		background-color: blue;
		border-radius:36px;
		line-height: 36px;
		text-align: center;
	}
	.person-card-right {
		height: 30px;
		margin-left: 20rpx;
		-webkit-flex: 1;
		flex: 1;
		padding-top: 3px;
		padding-bottom: 3px;
		.person-card-top {
			height: 15px;
			line-height: 15px;
			.person-card-title {
			   font-size: 15px;
			   display: inline-block;
			   width: 100%;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
		}
		.person-card-bottom {
			height: 15px;
			display: flex;
			.person-card-age {
				background-color: #0ce1f7;
				border-radius: 2px;
				height: 15px;
				line-height: 15px;
				font-size: 12px;
				padding:0 5rpx;
				color: #FFFFFF;
			}
			.person-card-address {
			   font-size: 12px;
			   line-height: 15px;
			   display: inline-block;
			   color: #9a9494;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			   margin-left: 20rpx;
			}
		}
	}
	.press-on {
	    background-color: #d6d6d6;
	}
</style>
