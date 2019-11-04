const http=require('http');
const fs=require('fs');
const url=require('url');
const querystring=require('querystring');
const path=require('path');
//获取成绩  成绩的数据从数据库/从json文件获取
const scoreData=require('./scores.json');
const template=require("art-template");


http.createServer((req,res)=>{
	//入门  请求路径   +请求方式
	//查询成绩
	//请求路径：/query
	/*http::8020/query*/
	if(req.url.startsWith("/query")&&req.method=="GET"){
		
		let content=	template(path.join(__dirname,"view","index.art"),{});
		res.end(content);
	}else if(req.url.startsWith("/score")&&req.method=="POST"){
		
		let tdata="";
		req.on('data',(chunk)=>{
			tdata+=chunk;
		});
		req.on('end',()=>{
			console.info("tdata-->"+tdata);
			let obj=querystring.parse(tdata);
			/*获取得到参数值 code:no123*/
			let resultData=scoreData[obj.code];
			
			//将数据填充模板
			let content=	template(path.join(__dirname,"view","result.art"),resultData);
		   //将内容显示在浏览器
		   res.end(content);
		});
		
	}else if(req.url.startsWith("/all")&&req.method=="GET"){
		let arr=[];
		for(let k in scoreData){
			console.info(k);
			arr.push(scoreData[k])
			
		}//json  -->arr
		
		let content=	template(path.join(__dirname,"view","list.art"),{
			list:arr
		});
		   //将内容显示在浏览器
		   res.end(content);
	}
	
}).listen("8020",()=>{
	console.info("02.js启动了");
})

