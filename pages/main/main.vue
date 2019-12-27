<template>
	<view class="hole">
		<div class="status-bar"></div>
		<uni-nav-bar  
		  left-text="杨洋"
		  backgroundColor="#0faeff"
		  color="#ffffff"
		  :fixed="true"
		  :shadow="false"
		  :border="false"
		  title="消息"/>
		<view class="content">
			<view class="message-card">
					<view class="message-card-left">杨</view>
					<view class="message-card-right">
						<view class="message-card-top">
							<view class="message-card-title">啊实打实</view>
							<view class="message-card-time">上午11:00</view>
						</view>
						<view class="message-card-bottom"> 
							<view class="message-card-info">aasdsadassaAAaaa啊啊啊</view>
							<view class="message-card-num">2</view>
						</view>
					</view>
			</view>
			<view class="message-card">
				
			</view>
			<view class="message-card">
				
			</view>
		</view>
	</view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
		data() {
			return {
				city: '北京'
			}
		},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		components:{
		},
		methods:{
			
		}
    }
</script>

<style lang="scss">
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

	.message-card {
		background-color: red;
		width: 100%;
		height: 46px;
		margin-bottom: 24px;
		display: flex;
		flex-direction: row;
	}
	
	.uni-flex {
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
		background-color: purple;
		-webkit-flex: 1;
		flex: 1;
		padding: 8px 0;
		.message-card-top {
			height: 15px;
			background-color: yellow;
			line-height: 15px;
			.message-card-title {
			   font-size: 15px;
			   display: inline-block;
			   width: calc(100% - 56px);
			}
			.message-card-time {
				font-size: 8px;
				text-align: right;
				display: inline-block;
				width: 56px;
			}
		}
		.message-card-bottom {
			height: 15px;
			background-color: green;
			.message-card-info {
			   font-size: 13px;
			   display: inline-block;
			   width: calc(100% - 56px);
			}
			.message-card-num {
			   font-size: 8px;
			   text-align: right;
			   display: inline-block;
			   width: 56px;
			}
		}
	}
</style>
