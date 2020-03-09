<template>
	<view class="hole edit-info">
		<view class="uni-form">
			<form @submit="formSubmit" @reset="formReset">
				<view hover-class="press-on" class="form-item" style="margin-top: 40rpx;">
					<view  class="form-item-label">姓名</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  v-model="userData.name"
						  name="nickname" 
						  placeholder="请输入姓名" />
					</view>
				</view>
				<view hover-class="press-on" class="form-item">
					<view class="form-item-label">签名</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname"
						  v-model="userData.saying"
						  placeholder="请输入签名" />
					</view>
				</view>
				<view style="margin-top: 40rpx;" hover-class="press-on" class="form-item">
					<view class="form-item-label">年龄</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  v-model="userData.age"
						  placeholder="请输入年龄" />
					</view>
				</view>
				<view hover-class="press-on" class="form-item" >
					<view class="form-item-label">性别</view>
					<view class="form-item-element">
						<radio-group v-model="userData.sex" name="gender" @change="radioChange">
							<label>
								<radio class="form-item-radio" value="男" /><text>男</text>
							</label>
							<label>
								<radio class="form-item-radio" value="女" /><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view hover-class="press-on" class="form-item" @tap="showProvince">
					<view class="form-item-label">省</view>
					<view class="form-item-element">
						{{userData.province}}
					</view>
				</view>
				<view hover-class="press-on" class="form-item" @tap="showCity">
					<view class="form-item-label">市</view>
					<view class="form-item-element">
						{{userData.city}}
					</view>
				</view>
				<view hover-class="press-on" class="form-item" @tap="showXingZuo">
					<view class="form-item-label">星座</view>
					<view class="form-item-element">
						{{userData.xingZuo}}
					</view>
				</view>
				
				<view hover-class="press-on" class="form-item">
					<view class="form-item-label">新密码</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  v-model="userData.passowrd"
						  placeholder="请输入密码" />
					</view>
				</view>
				<view hover-class="press-on" class="form-item">
					<view class="form-item-label">确认</view>
					<view class="form-item-element">
						<input 
						  class="uni-input" 
						  name="nickname" 
						  v-model="userData.rePassowrd"
						  placeholder="再次输入密码" />
					</view>
				</view>
				<view style="margin-top: 40rpx;" class="">
					<button @tap="submit()" type="primary">保存</button>
				</view>
			</form>
		</view>
		<mpvue-picker
			:themeColor="themeColor"
			ref="mpvuePicker"
			:mode="mode"
			:deepLength="deepLength"
			:pickerValueDefault="pickerValueDefault"
			@onConfirm="onConfirm"
			@onCancel="onCancel"
			:pickerValueArray="pickerValueArray"
		></mpvue-picker>
	</view>
</template>

<script>
    import { mapState } from 'vuex'
	import  infoCard from '@/components/aa-my-com/info-card.vue'
	import  navBar from '@/components/aa-my-com/nav-bar.vue'
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue'
    export default {
		data() {
			return {
				navTitle:"消息",
				sex:"男",
				pickerValueArray: [
					{
						label: '北京市',
						value: 110000
					},
					{
						label: '天津市',
						value: 120000
					},
					{
						label: '广州市',
						value: 440100
					},
					{
						label: '深圳市',
						value: 440300
					}
				],
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				whichSelect:"province",
				userData:{
					ID:this.ID,
					province:"",
					xingZuo:"",
					province:"",
					city: "",
					name:"",
					age:"",
					saying:"",
					sex:"",
					password:"",
					rePassword:""
				}
			}
		},
        computed: {
		    ...mapState('message', [
		        'messageListData',
		      ]),
			...mapState([
			    'addressData',
				'xingZuoData',
				'ID'
			  ]),
			  cityData() {
				  let answer = [];
				  this.addressData.forEach((item)=>{
					 if(item.label === this.userData.province) {
						 answer = item.children;
					 }
				  })
				  console.log(answer);
				  return answer;
			  }
	    },
		components:{
			infoCard,
			navBar,
			mpvuePicker
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
			},
			ss() {
			},
			radioChange(e) {
				this.userData.sex = e.detail.value;
				console.log(this.sex)
			},
			onConfirm(e) {
				console.log(e);
				if(this.whichSelect === "province") {
					this.userData.province = e.label;
				} else if(this.whichSelect === "city") {
					this.userData.city = e.label;
				} else if(this.whichSelect ==="xingZuo") {
					this.userData.xingZuo = e.label;
				}
			},
			onCancel(e) {
				console.log(e);
			},
			showProvince() {
				this.pickerValueArray = this.addressData;
				this.whichSelect = "province"
				this.mode = 'selector';
				this.deepLength = 1;
				this.pickerValueDefault = [0];
				this.$refs.mpvuePicker.show();
			},
			showCity() {
				if(!this.userData.province) {
					uni.showToast({title:"请先选择省份", icon:"none"});
					return
				}
				this.whichSelect = "city";
				this.mode = 'selector';
				this.pickerValueArray = this.cityData;
				this.deepLength = 1;
				this.pickerValueDefault = [0];
				this.$refs.mpvuePicker.show();
			},
			showXingZuo() {
				this.whichSelect = "xingZuo";
				this.mode = 'selector';
				this.pickerValueArray = this.xingZuoData;
				this.deepLength = 1;
				this.pickerValueDefault = [0];
				this.$refs.mpvuePicker.show();
			},
			submit() {
				console.log(this.ID)
				this.$store.dispatch("subUserInfo");
				this.editRequest();
			},
			editRequest() {
				this.loading = true;
				this.userData['ID'] = this.ID;
				uni.request({
					url: "http://localhost:8080/user/chUserInfo",
					method:'get',
					data: this.userData
				}).then(res => {
					
					console.log('request success', res[1].data);
					if(res[1].data.code == 0) {
						uni.showToast({
							title: res[1].data.msg,
							icon: 'none',
							// mask: true,
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
		},
		onLoad() {
			
		},
		onUnload() {
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