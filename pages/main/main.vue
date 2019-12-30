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
			<info-card></info-card>
			<info-card></info-card>
			<info-card></info-card>
			<info-card></info-card>
			<info-card></info-card>
			<info-card></info-card>
			<info-card></info-card>
		</view>
	</view>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import  infoCard from '@/components/aa-my-com/info-card.vue'
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
			infoCard
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

	
	.uni-flex {
		display: flex;
		flex-direction: row;
    }
    

</style>
