/*

express:基于 Node.js 平台，快速、开放、极简的 Web 开发框架

cmd  :
artTemplate>npm init -y

package.json

artTemplate>npm install  express --save
安装模板引擎
artTemplate>npm install  art-template --save

安装express兼容模板引擎
artTemplate>npm install  express-art-template --save
npm install  express art-template express-art-template --save 
http://www.360doc.com/content/18/0422/07/32517277_747703104.shtml
*/
const express= require("express");
const template= require("art-template");
const path= require("path");
const bodyparser=require("body-parser");
const app= express();
const router=require("./router.js");

//设置模板路径
app.set('views',path.join(__dirname,"views"));
//设置模板引擎
app.set('view engine', 'art');

//使express兼容art-template
//express-art-template
app.engine('art',require('express-art-template'));
app.use("/public",express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));
//挂载中间件：处理json格式的数据
app.use(bodyparser.json());
app.use(router);

/*let data= require("./data.json");
app.get("/index",(req,res)=>{
	console.log(data);
	let obj={
		list:data
	}
	res.render('index',obj);
	
});*/
app.listen("8020",()=>{
	console.info("index 服务器启动了。。");
});

