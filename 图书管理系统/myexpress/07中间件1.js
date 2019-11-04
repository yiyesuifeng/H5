var express = require('express')
var app = express();

//引入一个环节


var myLogger = function (req, res, next) {
	  console.log('LOGGED');
	  next();//进入下一个环节   ，如果注释了就不能进到下一个环节
}

//app.use(myLogger);

var mydate = function (req, res, next) {
	  console.log('mydate');
	  next(); //进入下一个环节   ，如果注释了就不能进到下一个环节
};
//app.use(mydate);
var myaa = function (req, res, next) {
	  console.log('myaa');
	 next();//进入下一个环节   ，如果注释了就不能进到下一个环节
}
//app.use(myaa);

/*app.use('/',[myLogger,mydate,myaa]);
app.get('/', function (req, res) {
	console.log('get');
	  res.send('Hello World!get')
});
等价于
app.get('/',[myLogger,mydate,myaa], function (req, res) {
	console.log('get');
	  res.send('Hello World!get')
});
*/
app.get('/',[myLogger,mydate,myaa], function (req, res) {
	console.log('get');
	  res.send('Hello World!get')
});
app.listen("8020",()=>{
	
	console.info("07   启动。。。");
	
});

//http://localhost:8020