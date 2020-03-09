<template>
    <view class="hole">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input type="text" focus clearable v-model="ID" placeholder="请输入账号"></m-input>
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
            </view>
            <!-- <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view> -->
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                ID: '',
                password: '',
                email: ''
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.ID.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                // if (this.email.length < 3 || !~this.email.indexOf('@')) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '邮箱地址不合法'
                //     });
                //     return;
                // }
                this.registRequest();
                
            },
			registRequest() {
				this.loading = true;
				uni.request({
					url: "http://localhost:8080/user/regist",
					method:'get',
					data: {ID:this.ID,password:this.password}
				}).then(res => {
					
					console.log('request success', res[1].data);
					if(res[1].data.code == 0) {
						this.$store.commit('login',res[1].data.data.name)
						uni.showToast({
							title: res[1].data.msg,
							icon: 'none',
							// mask: true,
						});
						uni.showToast({
						    title: '注册成功'
						});
						uni.navigateBack({
						    delta: 1
						});
					} else {
						uni.showToast({
							title: res[1].data.msg,
							icon: 'none',
							// mask: true,
						});
					}
					
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
			        
					this.loading = false;
				});
			},
        }
    }
</script>

<style>

</style>
