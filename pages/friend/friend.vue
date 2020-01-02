<template>
    <view class="hole">
    	<div class="status-bar"></div>
    	<nav-bar
    	 :navTitle="navTitle"/>
    	<view class="content">
    		
    	</view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import  navBar from '@/components/aa-my-com/nav-bar.vue'
    export default {
		data(){
		  return {
			  navTitle:"联系人"
		  }
		},
        computed: {
        },
        methods: {
            
        },
		components:{
			navBar
		}
    }
</script>

<style>
.status-bar {
		height: var(--status-bar-height);
		min-height: 25px;
		background-color: #0faeff;
	}
	
.hello {
	display: flex;
	flex: 1;
	flex-direction: column;
}
</style>
