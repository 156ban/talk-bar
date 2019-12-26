<template>
    <view class="hole">
    	<div class="status-bar"></div>
    	<uni-nav-bar  
    	  left-text="杨洋"
    	  backgroundColor="#0faeff"
    	  color="#ffffff"
    	  :shadow="false"
    	  :border="false"
		  :fixed="true"
    	  title="消息"/>
    	<view class="content">
    		
    	</view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        computed: {
        },
        methods: {
            
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
