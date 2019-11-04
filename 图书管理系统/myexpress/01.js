/*

express:基于 Node.js 平台，快速、开放、极简的 Web 开发框架

cmd  :
myexpress>npm init -y

package.json

myexpress>npm install  express --save


http://www.360doc.com/content/18/0422/07/32517277_747703104.shtml
*/

//使用express实现服务器的功能
/*
const express= require("express");
//调用方法
const app=express();*/

const app= require("express")();

//get请求  /:根  http://localhost:8020    http://localhost:8020/aa
app.get("/aa",(req,res)=>{
	//send 响应浏览器
	res.send("ok helloworld");
}).listen("8020",()=>{
	console.info("express 服务器启动了。。");
});