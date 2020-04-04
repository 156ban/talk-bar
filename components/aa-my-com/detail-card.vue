<template>
	<view class="detail-card">
		<view class="detail-card-left" v-if="!person">{{name.slice(0,1)}}</view>
		<view class="detail-card-center" :style="'text-align:'+(person?'right':'left')">
			<view class="text-card">
				{{content}}
			</view>
		</view>
		<view class="detail-card-right" v-if="person">{{name.slice(0,1)}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			content: {
				type: String,
				default: '杨洋，这周安亚辉回家啦，？下周问他了，他说不回家啦，下周可以吗'
			},
			person: {
				type: Number,
				default: 0,
			},
			name: {
				type: String,
				default: "杨",
			},
			ID: {
				type: String,
			}
		},
		data() {
			return {
				
			}
		},
		computed:{
			
		},
		methods:{
			
		},
		components:{
		}
	}
</script>

<style lang="scss">
	.detail-card {
		position: relative;
		margin:9px 20rpx;
		text-align: center;
		line-height: 36px;
		&-left {
			position: absolute;
			left: 0;
			top: 0;
			height: 36px;
			width: 36px;
			background-color: #007AFF;
			border-radius: 36px;
			font-size: 20px;
		}
		&-center {
			width: calc(100% - 72px - 40rpx);
			margin: auto;
			padding: 0 20rpx;
			.text-card {
				background-color: lightblue;
				min-height: 26px;
				border-radius: 12px;
				font-size: 14px;
				display: inline-block;
				text-align: left;
				padding: 5px 20rpx;
				line-height: 25px;
			}
		}
		&-right {
			position: absolute;
			right: 0;
			top: 0;
			height: 36px;
			width: 36px;
			background-color: #007AFF;
			border-radius: 36px;
			font-size: 20px;
		}
	}
</style>
