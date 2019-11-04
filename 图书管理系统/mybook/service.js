let data=require("./data.json");
let path=require("path");
let fs=require("fs");
exports.showIndex=(req,res)=>{
	res.render("index",{list:data});
}
exports.toAddBook=(req,res)=>{
	res.render("addBook",{});
}
//获取json文件的id最大编号 +1
let maxCode=()=>{
	let arr=[];
	data.forEach((obj,index)=>{
		//console.info(obj,index);
		arr.push(obj.id);
		
	});
	//获取数组最大值
	return Math.max.apply(null,arr);
}
//console.info(maxCode());
exports.addBook=(req,res)=>{
	let info=req.body;
	let book={};
	book.id=maxCode()+1;
	for(let key in info){
		book[key]=info[key];
		console.info(info[key]);
	}
	console.info(book);
	data.push(book);
	console.info(data);
	//将data数据写入到json文件
	fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(data,null,4),(err)=>{
		if(err){
			res.send("添加失败");
		}
		//添加成功回到列表显示页面
		res.redirect("/");
	});
	
}
exports.toEditBook=((req,res)=>{
	//根据请求的参数id 查询当前图书记录
	let id=req.query.id;
	let book={};
	data.forEach((obj,index)=>{
		if(obj.id==id){
			book=obj;
			return;
		}
		
	});
	//渲染到编辑页面
	res.render("editBook",book);
})
exports.editBook=(req,res)=>{
	let info=req.body;
	data.forEach((obj,index)=>{
		if(obj.id==info.id){
			for(let key in info){
					obj[key]=info[key];
					
				}
			return;
		}
		
		
	});
	console.info(data);
	res.send("成功");
	fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(data,null,4),(err)=>{
		if(err){
			res.send("修改失败");
		}
		//添加成功回到列表显示页面
		res.redirect("/");
	});
	
}

exports.deleteBook=(req,res)=>{
	let id=req.query.id;
	data.forEach((obj,index)=>{
	if(obj.id==id){
		data.splice(index,1)
	}
	return;
	});
	fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(data,null,4),(err)=>{
		if(err){
			res.send("修改失败");
		}
		//添加成功回到列表显示页面
		res.redirect("/");
	});
}

