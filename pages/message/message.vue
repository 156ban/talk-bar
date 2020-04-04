<template>
	<view class="hole message">
		<div class="status-bar"></div>
		<nav-bar 
		 :navTitle="navTitle"/>
		<view class="info-card-group">
			<view 
			  @tap="goDetail(item)" 
			  class=""
			  v-for="(item,index) in messageListData"
			  :key="index" >
				<info-card
				 :userName="item.name.slice(0,1)"
				 :title="item.name"
				 :info="item.data">
				</info-card>
			</view>
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
				messageListData:[],
				MockData:[{userName:"王",
				           title:"这是人名",
						   time:"下午1:00",
						   info:"人生不满百，常怀千岁忧",
						   messageNum:"18"}]
			}
		},
        computed: {
			...mapState([
		        'ID','userName'
		      ]),
	    },
		components:{
			infoCard,navBar
		},
		methods:{
			goDetail(friendInfo) {
				uni.navigateTo({
					url: '../message/message-detail?friendInfo='+JSON.stringify(friendInfo)
				});
			},
			getList() {
				this.$get('/message/getMessageList',{ID:this.ID})
				.then((value)=>{
					this.messageListData = value.data;
				})
				.catch((err)=>{
					uni.showToast({
						title: err,
						icon: 'none',
						// mask: true,
					});
					console.log(err);
				})
			}
		},
		onShow() {
			this.getList();
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
    .info-card-group {
		background-color: #FFFFFF;
	}

</style>
