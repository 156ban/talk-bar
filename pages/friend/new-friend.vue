<template>
    <view class="new-friend-page hole">
    	<view class="content">
    		<view class="new-friend-title" >
				<uni-search-bar 
				  radius="100" 
				  placeholder="搜索"
				  class="new-friend-search"/>
    		</view>
			<view class="person-group">
				<view 
				  v-for="(item,index) in newFriendListData"
				  :key="index">
				  <person-card
				    :userName="item.userName"
					:title="item.title"
					:sex="item.sex"
					:age="item.age"
					:address="item.address">
				  </person-card>
				</view>
				<person-card></person-card>
				<person-card></person-card>
			</view>
    	</view>
		
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import  navBar from '@/components/aa-my-com/nav-bar.vue'
	import  personCard from '@/components/aa-my-com/person-card.vue'
    export default {
		data(){
		  return {
			  navTitle:"联系人",
			  mockData:[
				  {
				    userName:"王",
					title:"朱高帜",
					sex:"女",
					age:"25",
					address:"美国 家里蹲",
				  },
			  ]
		  }
		},
        computed: {
			...mapState('friend', [
			    'newFriendListData'
			  ]),
        },
        methods: {
            goDetail() {
            	uni.navigateTo({
            		url: '../friend/friend-detail'
            	});
            }
        },
		components:{
			navBar,personCard
		},
		onLoad() {
			this.$store.dispatch("friend/getNewFriendListData");
		}
    }
</script>

<style lang="scss">
.new-friend-page {
  background-color: #FFFFFF;
  .new-friend-search {
	  padding-left:30rpx;
	  padding-right:30rpx;
  }
  .person-group {
	  margin-top: 25px;
  }
  .press-on {
      background-color: #efeff4;
  }
}

</style>