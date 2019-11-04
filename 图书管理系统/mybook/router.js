//处理所有的请求
//加载一个查询列表的页面
const express=require("express");
const router=express.Router();
const service=require("./service.js");
/*let data=require("./data.json");*/
router.get("/",service.showIndex);
router.get("/toAddBook",service.toAddBook);
router.post("/addBook",service.addBook);
router.get("/toEditBook",service.toEditBook);	
router.post("/editBook",service.editBook);
router.get("/deleteBook",service.deleteBook);
module.exports=router;
