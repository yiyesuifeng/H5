/*
路由  ：请求服务器资源：  根据请求路径url 和请求方式 method  进行处理

常见请求方式：get  post  delete  put  restful 风格（url） /user/:id

场景：get：查询  post：添加    delete：删除  put：更新


/url?name='小白'  ：get   name 是参数

/url/name    name：小白/小黑   name：是url
*/

const express=require("express");
const app= express();


app.use('/', function (req, res) {
	
	  res.send('Hello World!use')
});

/*
app.get('/', function (req, res) {
	console.info("03   启动。。get。");
	  res.send('Hello World!')
});
app.post('/', function (req, res) {
	console.info("03   启动。。post。");
	  res.send('Got a POST request')
});

app.put('/user', function (req, res) {
	console.info("03   启动。。put。");
	  res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) {
	console.info("03   启动。。delete。");
	  res.send('Got a DELETE request at /user')
});
*/



app.listen("8020",()=>{
	
	console.info("03   启动。。。");
	
})

/**
 * 测试安装postman：https://www.jianshu.com/p/5c40ff808f90
 */
