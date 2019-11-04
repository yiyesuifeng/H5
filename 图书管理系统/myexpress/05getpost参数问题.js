const express=require("express");
const app= express();
const bodyparser=require("body-parser");


//https://www.jianshu.com/p/cf01f3c14a4f


//http://localhost:8020/user?username='ll'&password='123456'
app.get("/user",(req,res)=>{
	console.info(req);
	console.info(req.query)
	
	res.send(req.query.password);
});

//post  和get 是有区别  ：post 需要引入文件body-parser
let urlencode= bodyparser.urlencoded({extended:false});
app.use("/www",express.static("www"));


app.post("/user/login",urlencode,(req,res)=>{
	console.info(req);
	console.info(req.body)
	res.send(req.body.username);
});

app.listen("8020",()=>{
	
	console.info("05  启动。。。");
	
})
