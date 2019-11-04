const express=require("express");
const app= express();
const route=require("./myrouter.js");
console.info(route);
//app.route();

/*app.use(route);*/
//使用虚拟路径
//app.use("/book",route);
app.route("/hello").get((req,res)=>{
	res.send("111");
});//http://localhost:8020/hello
app.listen("8020",()=>{
	
	console.info("04  启动。。。");
	
})


