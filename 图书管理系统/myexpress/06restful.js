const express=require("express");
const app= express();


app.use('/:id/:name', function (req, res) {
	//console.info(req);
	//url  /123   参数params： { name: '123' }
	// params: { name: '123' },
	console.info(req.url);//  /
	console.info(req.params);
	console.info(req.params.name);  
	  res.send('Hello World!name')
});

app.listen("8020",()=>{
	
	console.info("06   启动。。。");
	
})