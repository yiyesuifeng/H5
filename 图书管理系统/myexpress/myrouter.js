/*

express.Router()路由
https://blog.csdn.net/u012326462/article/details/83214033


增删查改   4个请求
*/

const express=require("express");
//var  router =express.Router();

const  aa =express.Router();
aa .get('/add', function (req, res) {
	
	  res.send('Hello add!')
});

aa .get('/update', function (req, res) {
	
	  res.send('Hello update!')
});


aa .get('/detele', function (req, res) {
	
	  res.send('Hello detele!')
});


aa .get('/list', function (req, res) {
	
	  res.send('Hello list!')
});

aa .get('/findById', function (req, res) {
	
	  res.send('Hello list!')
});

//给其他页面使用
module.exports=aa ;

