<template>
	
	<div>
		
		<!--HomeContainer 加载轮播图  mint-ui轮播图
			
			获取轮播图的API地址    请求方式 Get      请求地址  /api/getlunbo
			http://www.liulongbin.top:3005/api/getlunbo   vue-resource  vue的ajax
			npm i  vue-resource -S
			
			
		-->
	<!--	HomeContainer.vue-->
		
		   <mt-swipe :auto="4000"> 
				  <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
				  	
				  	     <img  :src="item.img">
				  	
				  </mt-swipe-item>
			</mt-swipe>
	
			<!--分类显示图标  mui-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/home/newslist">
		                    <img src="../../img/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<!--通过路由切换到图片分析的主页面 导航分类轮播拖动显示  下面市图片信息
		            		将a标签换成路由
		            	-->
		            	<router-link to="/home/photolist">
		                         <img src="../../img/menu2.png">
		                   		 <div class="mui-media-body">图片分析</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                       <img src="../../img/menu3.png">
		                    <div class="mui-media-body">商品分类</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                          <img src="../../img/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                         <img src="../../img/menu5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                        <img src="../../img/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		   </ul>
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	//组件一加载就发送ajax请求
	export default{
		data(){
			return{
				lunbotuList:[]
			}
		},
		created(){
			this.getLunbotu();//生命周期的方法
		},
		methods:{
			//获取轮播图
			getLunbotu(){
				this.$http.get("api/getlunbo").then(result=>{
					if(result.body.status==0){//成功
						this.lunbotuList=result.body.message;
					}else{//失败
						Toast("轮播图加载失败...");
					}
				})
			}
		}
		
	}
	
	
</script>

<style lang="less" scoped>
	
	.mint-swipe{
		 height: 200px;
	}
	img{
		width: 100%;
		height:100%;
	}
	.mui-grid-view.mui-grid-9{
		background: #fff;
		border: none;
		img{
			width: 60px;
			height: 60px;
		}
		.mui-media-body{
			font-size: 13px;
		}
	}
	
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: 0;
	}
		
	
</style>