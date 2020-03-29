<template>
	<view class="person-card" hover-class="press-on">
			<view class="person-card-left">{{userName.slice(0,1)}}</view>
			<view class="person-card-right">
				<view class="person-card-top">
					<view class="person-card-title">{{title}}</view>
				</view>
				<view  class="person-card-bottom"> 
				    <view :style="{'background-color':(sex==='男')?'#0ce1f7':'pink'}" class="person-card-age">
				    	{{sex}} {{age}}
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
				type: String,
				default: 'age'
			},
			sex: {
				type: String,
				default: '男'
			}
		},
	}
</script>

<style lang="scss">
	
	.person-card {
		width: calc(100% - 40rpx);
		height: 90rpx;
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
		width: 85rpx;
		background-color: blue;
		border-radius:90rpx;
		line-height: 90rpx;
		text-align: center;
	}
	.person-card-right {
		height: 75rpx;
		width: 400rpx;
		margin-left: 20rpx;
		-webkit-flex: 1;
		flex: 1;
		padding-top: 7.5rpx;
		padding-bottom: 7.5rpx;
		.person-card-top {
			height: 37.5rpx;
			line-height: 37.5rpx;
			.person-card-title {
			   font-size: 37.5rpx;
			   display: inline-block;
			   width: 100%;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			}
		}
		.person-card-bottom {
			height: 37.5rpx;
			display: flex;
			.person-card-age {
				background-color: #0ce1f7;
				border-radius: 3rpx;
				height: 37.5rpx;
				line-height: 37.5rpx;
				font-size: 30rpx;
				padding:0 5rpx;
				color: #FFFFFF;
			}
			.person-card-address {
			   font-size: 30rpx;
			   line-height: 37.5rpx;
			   display: inline-block;
			   color: #9a9494;
			   overflow: hidden;
			   text-overflow:ellipsis;
			   white-space: nowrap;
			   margin-left: 20rpx;
			}
		}
	}
</style>
