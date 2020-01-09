<template>
	<view class="hole edit-info">
		<view class="uni-form">
			<form @submit="formSubmit" @reset="formReset">
				<view class="form-item" style="margin-top: 40rpx;">
					<view class="form-item-label">姓名</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  placeholder="请输入姓名" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">签名</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  placeholder="请输入签名" />
					</view>
				</view>
				
				<view class="form-item" style="margin-top: 40rpx;">
					<view class="form-item-label">性别</view>
					<view class="form-item-element">
						<radio-group name="gender">
							<label>
								<radio class="form-item-radio" value="男" /><text>男</text>
							</label>
							<label>
								<radio class="form-item-radio" value="女" /><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">地址</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  placeholder="请输入签名" />
					</view>
				</view>
				<view class="form-item">
					<view class="form-item-label">星座</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  placeholder="请输入签名" />
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
    import { mapState } from 'vuex'
	import  infoCard from '@/components/aa-my-com/info-card.vue'
	import  navBar from '@/components/aa-my-com/nav-bar.vue'
    export default {
		data() {
			return {
				navTitle:"消息",
				city: '北京',
				MockData:[{userName:"王",
				           title:"这是人名",
						   time:"下午1:00",
						   info:"人生不满百，常怀千岁忧",
						   messageNum:"18"}],
				sex:"男",
			}
		},
        computed: {
		    ...mapState('message', [
		        'messageListData',
		      ]),
	    },
		components:{
			infoCard,navBar
		},
		methods:{
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			    //定义表单规则
			    var rule = [
			        {name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
			        {name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
			        {name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
			    ];
			    //进行表单检查
			    var formData = e.detail.value;
			    var checkRes = graceChecker.check(formData, rule);
			    if(checkRes){
			        uni.showToast({title:"验证通过!", icon:"none"});
			    }else{
			        uni.showToast({ title: graceChecker.error, icon: "none" });
			    }
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
		onLoad() {
			
		}
    }
</script>

<style lang="scss">
    .edit-info {
	    .uni-form {
			.form-item {
				align-items: center;
				display: flex;
				height: 100rpx;
				background-color: #FFFFFF;
				justify-content: space-between;
				padding: 0 20rpx;
				.form-item-label {
					width: 125rpx;
				}
				.form-item-element {
					flex: 1;
					.form-item-radio {
						transform:scale(0.7)
					}
				}
			}
		}
    }

</style>