<template>
	<view class="hole message">
		<div class="status-bar"></div>
		<nav-bar 
		 :navTitle="navTitle"/>
		<view class="info-card-group">
			<view 
			  @tap="goDetail()" 
			  class=""
			  v-for="(item,index) in messageListData"
			  :key="index" >
				<info-card
				 :userName="item.userName"
				 :title="item.title"
				 :time="item.time"
				 :info="item.info"
				 :messageNum="item.messageNum">
				</info-card>
			</view>
			<info-card></info-card>
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
						   messageNum:"18"}]
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
			goDetail() {
				uni.navigateTo({
					url: '../message/message-detail'
				});
			}
		},
		onLoad() {
			this.$store.dispatch("message/getMessageListData");
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
