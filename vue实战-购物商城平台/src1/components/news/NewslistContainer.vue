<template>
	<div>
		
		
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist"  :key="item.id">
					<!--
                    	作者：offline
                    	时间：2019-10-29
                    	描述：将a标签换成路由<router-link>去查看详情页面   restful
                    -->
                    <router-link :to="'/home/newsinfo/'+item.id" >
					<!--<router-link :to="'/home/newsinfo/'+item.id" >    home/newsinfo/13-->
						<!--<router-link :to="'/home/newsinfo?id='+item.id" >--> <!--get请求：home/newsinfo?id=13-->
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>发布时间：{{item.add_time | dateFormat}}</span>
								<span>点击：{{item.click}} 次</span>
								
							</p>
						</div>
					</router-link>
				</li>
			</ul>
		
		
		
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	//获取新闻列表
	export default {
		data(){
			return {
				newslist:[]//新闻列表
			}
		},
		created(){
			this.getNewslist();
		},
		methods:{
			//获取新闻列表
			getNewslist(){
				this.$http.get("api/getnewslist").then(result=>{
					if(result.body.status==0){
					    this.newslist=result.body.message;
					}else{
						Toast("新闻列表加载失败...");
					}
				})
			}
		}
	}
	
	
	
	
</script>

<style lang="less"  scoped>
.mui-table-view{
	li{
		h1{
			font-size: 14px;
		}
		
	}
}
.mui-ellipsis{
	font-size: 12px;
	color: skyblue;
	display: flex;
	justify-content: space-between;
}
/* h1{
	font-size: 14px;
}
*/
</style>