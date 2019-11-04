<template>
	<!--<h1>发布评论---comment</h1>-->
	<div class="cmt-container">
		<h3>发布评论</h3>
		<hr />
		<textarea placeholder="请输入要吐槽的内容（最多吐槽120字）" maxlength="120"  v-model="msg"></textarea>
		
		<mt-button type="primary" size="large" @click="addComment" >发表评论</mt-button>
		
		<div class="cmt-list">
			<div class="cmt-item"  v-for="(item,index) in comments" :key="item.add_time|dateFormat">
				<div class="cmt-head">
					第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}} &nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
					
				</div>
				<div class="cmt-body"> 
					{{item.content=='undefined'?"此用户很懒，嘛都没说":item.content}}
					
				</div>
			</div>
			
			
		</div>
		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
	</div>
	
	
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				
				pageindex:1,//第一页
				comments:[],
				msg:""//要评论的内容
			}
		},
		props:["id"],//子组件使用父组件数据 要加props
		created(){//data和methods都初始化完毕
			this.getComments();
		},
		methods:{
			getComments(){
				
				this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
					if(result.body.status==0){
						//每次获取下一页评论数据会将下一页覆盖，希望不要将老数据覆盖，我们可以拼接数据。数据拼接调用什么方法：concat
						this.comments=this.comments.concat(result.body.message);
					}else{
						Toast("评论加载失败...");
					}
				})
			},
			getMore(){
				this.pageindex++;
				this.getComments();
			},
			addComment(){
				if(this.msg.trim().length==0){
					return Toast("评论内容不能为空...");
				}
				
				//发表评论  post  ：{emulateJSON:true}
				//提交地址/api/postcomment/:artid
				//提交参数


                     this.$http.post("api/postcomment/"+this.id,{content:this.msg.trim()}).then(
                     	result=>{
                     		if(result.body.status==0){//提交成功
                     			//拼接评论对象
                     			this.comments=[];//将之前的内容清空
                     			this.getComments();//再重新加载提交后的页面
                     			this.msg=""
                     		}else{
                     			Toast("评论失败...");
                     		}
                     		
                     		
                     	}
                     	
                     	
                     	
                     )
                   




				
			}
		}
	}
	
	
</script>

<style lang="less" scoped="scoped">
/*添加样式	*/
	.cmt-container{
		h3{
			font-size: 18px;
		}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 0px;
		}
		.cmt-list{
			margin: 5px 0;
			.cmt-item{
				font-size:13px;
				.cmt-head{
					line-height: 30px;
					background: gray;
				}
				.cmt-body{
					line-height: 35px;
					text-indent: 2em;
				}
			}
		}
	}
	
	
</style>