<template>
	
	<div>
		<!--顶部完成分类滑动栏  去掉mui-fullscreen-->
		<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						
						<!--导航数据从服务器获取-->
						<a :class="['mui-control-item',item.id==0?'mui-active':'']"   v-for="item in cates" :key="item.id"   href="#item1mobile" data-wid="tab-top-subpage-1.html"  >
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
		
		<!--图片列表-->
		<ul class="photo_list">  <!--router-link   tag="li"-->
			<li v-for="item in photolist" :key="item.id">
				<!--<img :src="item.img_url"/>-->
				<img v-lazy="item.img_url"/>
				 
				<div class="info">
					{{item.title}}
					<!--{{item.zhaiyao}}-->
					
				</div>
				
			</li>
			
			
		</ul>
		
	</div>
	
</template>

<script>
	//滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下
	
	//导入 mui.js
	
	import mui from "../../lib/mui/js/mui.min.js"
	
	//调用官方提供的 方式 去初始化：
	/*mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});*/
	export default{
		data(){
			return {
				cates:[],//导航数据的分类
				photolist:[]
			}
		},
		created(){
			this.getCates();
			//获取全部下面的图片列表
			this.getPhotoListByCateid(0);
		},
		mounted(){//data+methods+页面数据也初始化结束
			mui('.mui-scroll-wrapper').scroll({
	           deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	       });
		},
		methods:{
			getCates(){
				//发送异步请求
				
				this.$http.get("api/getimgcategory").then(rs=>{
					if(rs.body.status==0){
						this.cates=rs.body.message;//id值是从1开始  0：全部
						console.info(rs.body.message);
						var obj= { title:"全部", id:0 };
						this.cates.unshift (obj);
					}
				});
				
			},
			getPhotoListByCateid(cateid){
				/*alert(cateid);*/
				//"api/getimages/:cateid  :nodejs  ：后台
				this.$http.get("api/getimages/"+cateid).then(rs=>{
					if(rs.body.status==0){
						console.info(rs.body.message);
						this.photolist=rs.body.message;
					}
				});
			}
		}
	}
	
	
	
	
	
/*	
	Uncaught TypeError: ‘caller’, ‘callee’, and ‘arguments’ properties may not be accessed on strict mode functions or the arguments objects for calls to them
出现这个报错是因为mui中的tab-top-webview-main 滑动组件中的js，使用了非严格模式的语法，然而在webpack打包中默认使用了严格模式去打包
解决方法：
1.一号坑：取消掉webpack默认的严格模式打包：
下载：
npm install babel-plugin-transform-remove-strict-mode*/

//在bablerc文件中 添加：“plugins”:
//{
//	"plugins": ["transform-remove-strict-mode"]
//}


</script>

<style lang="less" scoped>
/*	Unable to preventDefault inside passive event listener due to target being treated as passive*/
* { touch-action: pan-y; }

.photo_list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li{
	   text-align: center;	
	   background-color: #ccc;
	   box-shadow: 0 0 9px #999;
	   position: relative;
	   img{
	   	width: 100%;
	   	
	   }
	  image[lazy=loading] {
		  width: 40px;
		  height: 300px;
		  margin: auto;
		}
	   .info{
	   	position: absolute;
	   	bottom: 0;
	   	text-align: center;
	   	color: white;
	   	background: rgba(0,0,0,0.4);
	   }
	}
}

</style>