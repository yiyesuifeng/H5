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
http://www.360doc.com/content/18/0422/07/32517277_747703104.shtml
*/


const express= require("express");
const app= express();
const template= require("art-template");
const path= require("path");
//设置模板路径
app.set('views',path.join(__dirname,"views"));
//设置模板引擎
app.set('view engine', 'art');

//使express兼容art-template
//express-art-template
app.engine('art',require('express-art-template'));


app.get("/query",(req,res)=>{
	let data={
		
		title:"颜色",
		list:['red','yellow','green']
	};
	res.render('listaa',data);
}).listen("8020",()=>{
	console.info("express 服务器启动了。。");
});