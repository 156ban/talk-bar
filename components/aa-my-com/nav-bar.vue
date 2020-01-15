<template>
	<view class="my-uni-nav-bar" >
		<uni-nav-bar
		  backgroundColor="#0faeff"
		  color="#ffffff"
		  :fixed="true"
		  :shadow="false"
		  :border="false"
		  :title="navTitle">
		  <block slot="left">
			<view class="nav-bar-name">
				<button 
				  class="button" 
				  @click="togglePopup('center', 'popup')">
				  {{name}}
				</button>
			</view>
		  </block>
		</uni-nav-bar>
		<uni-popup ref="showpopup" type="center" >
			<view class="popup-content">
				<button @tap="redirectTo">注销</button>
				<!-- <button @tap="redirectTo">修改密码</button> -->
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				title:"消息",
				name:"杨洋"
			}
		},
		props:{
		  navTitle: {
			type: String,
			default: '默认'
		  }
		},
	    onLoad() {
	        
	    },
		components:{
			uniCollapseItem,uniCollapse,uniPopup
		},
		methods:{
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			redirectTo() {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style lang="scss">
	.my-uni-nav-bar {
		.uni-navbar__content {
			overflow: visible;
		}
		.nav-bar-name {
			.button {
				background-color:transparent;
				border: none;
				height: 44px;
				color: #fff;
				&:after {
					border: none;
				}
			}
		}
		.popup-content {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			background-color: #fff;
			font-size: 14px;
		}
		
	}
</style>
