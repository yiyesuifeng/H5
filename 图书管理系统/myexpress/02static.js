/*

 静态文件加载
 
 
 通过espress托管静态文件
 
 */
const express=require("express");
const app= express();

//实现静态资源加载：

//使用use就可以

app.use(express.static("pub"));//http://localhost:8020/index.html
//使用虚拟目录
app.use("/pub",express.static("pub"));//http://localhost:8020/pub/index.html
app.use("/abc",express.static("pub"));//http://localhost:8020/abc/index.html
app.listen("8020",()=>{
	
	console.info("02static.js  服务器启动了。。");
})

