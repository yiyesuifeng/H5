<template>
	<div>
		<!--vue  路由取值  get： query  restful：param-->
	<!--详情页面	  ----- id：{{$route.params.id}}-->
	<!--新闻详情页面	  ---get-- id：{{$route.query.id}}-->
	  <h1 class="title">{{newsinfo.title}}</h1>
	
	   <p class="subtitle">
	   	<span>发布时间:{{newsinfo.add_time|dateFormat}}</span>
	   	<span>点击：{{newsinfo.click}} 次</span>
	   </p>
	   <hr />
	   
	  <!-- 内容区域 content:里面有html标签  能识别html标签：v-html -->
	  <div class="content" v-html="newsinfo.content">
	  	
	  </div>
	 <!-- 发表评论  是通过组件实现的-->
	
	 <!-- 评论标签-->
	  <comment-box  :id="this.id"></comment-box><!--父子组件传值属性绑定 子组件需要使用props属性-->
	  
	  
	</div>
</template>

<script>
	
	
		import { Toast } from 'mint-ui';
		import  comment from '../subcomponents/comment.vue';
	//获取新闻列表
	export default {
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{}//新闻列表一条
			}
		},
		created(){
			this.getNewsInfo();
		},
		methods:{
			//获取新闻信息
			getNewsInfo(){
				this.$http.get("api/getnew/"+this.id).then(result=>{
					if(result.body.status==0){
					    this.newsinfo=result.body.message[0];
					    console.info(this.newsinfo);
					}else{
						Toast("新闻信息加载失败...");
					}
				})
			}
		},
		components:{
			"comment-box":comment
		}
		
	}
	
	
</script>

<style lang="less"  scoped>
     .title{
     	font-size: 16px;
     	text-align: center;
     	margin: 15px 0;
     	color: red;
     }
  .subtitle{
  	font-size: 13px;
  	color: deepskyblue;
  	display: flex;
  	justify-content: space-between;
  }


</style>