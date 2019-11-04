/*模板引擎*/
/*mydemo-art>npm init -y

package.json

/*mydemo-art>npm install art-template --save
* */

let template=require("art-template");

/*template(模板路径,数据对象);*/


let html=template(__dirname+"/mytpl.art",{
	
	user:{
		name:'小白'
	}
	
});
console.info(html);


let h=template(__dirname+"/score.art",{
	
	chinese:'120',
	math:'140',
	english:'100',
	summary:'360'
	
});
console.info(h);

/*循环取值的模板*/
//let tpl='<ul>{{each list as value}}<li>{{value}}</li>{{/each}}</ul>';

let tpl='<ul>{{each list}}<li>{{$index}}----{{$value}}</li>{{/each}}</ul>';
let aa=template.compile(tpl);

let ret=aa({
	list:['red','yellow','green','blue']
});

console.info(ret);



