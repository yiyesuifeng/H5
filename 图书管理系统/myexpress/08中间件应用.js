/*
参数


get  post
*/

const express=require("express");
const app= express();
const bodyparser=require("body-parser");

//挂载中间件：静态页面的中间件

app.use(express.static("pub"));
//挂载中间件：post请求参数

app.use(bodyparser.urlencoded({extended:false}));
//挂载中间件：处理json格式的数据
app.use(bodyparser.json());

app.get("/user/login",(req,res)=>{
	let data=req.query;
	console.info(data);
	res.send("get data");
});


app.post("/user/login",(req,res)=>{
	let data=req.body;
	console.info(data);
	res.send("post data");
})

app.listen("8020",()=>{
	
	console.info("08。。。");
	
});
