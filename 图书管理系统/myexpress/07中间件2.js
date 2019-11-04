var express = require('express')
var app = express();

//引入一个环节

/*
app.get('/abc', function (req, res,next) {
	console.info(1);
	  next('route');//跳转到3
},(req, res)=>{
	console.info(2);
	res.send('abc')
});
*/

app.get('/abc',function (req, res) {
	console.log('3');
    res.send('Hello World!get')
});

app.listen("8020",()=>{
	
	console.info("res.send('Hello World!get')。。。");
	
});

//http://localhost:8020