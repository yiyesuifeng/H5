//10 
import VueRouter from 'vue-router';

//11 引入组件
import homeContainer from '../components/tabbar/HomeContainer.vue';
import memberContainer from '../components/tabbar/MemberContainer.vue';
import shopcarContainer from '../components/tabbar/ShopcarContainer.vue';
import searchContainer from '../components/tabbar/SearchContainer.vue';

import newslistContainer from '../components/news/NewslistContainer.vue';

import newsinfoContainer from '../components/news/NewsinfoContainer.vue';



import photolistContainer from '../components/photos/PhotolistContainer.vue';
// 12 创建路由对象

var  router=new VueRouter({
	//配置路由规则
	routes:[
	    {path:"/",redirect:"/home"},//重定向到首页
		{path:"/home",component:homeContainer	},
		{path:"/member",component:memberContainer},
		{path:"/shopcar",component:shopcarContainer},
		{path:"/search",component:searchContainer},
		{path:"/home/newslist",component:newslistContainer	},
		{path:"/home/newsinfo/:id",component:newsinfoContainer	},//restful
		/*{path:"/home/newsinfo",component:newsinfoContainer	},*///get请求
		{path:"/home/photolist",component:photolistContainer	},
	
	],
	linkActiveClass: 'mui-active'  //设置路由的高亮
});
  
//13 将创建路由对象导出
export default router;