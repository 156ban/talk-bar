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
			  navTitle:"联系人"
		  }
		},
        computed: {
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