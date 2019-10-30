$(function(){
	searchEffect();
	timeBack();
	/*bannerEffect();*/
})
function searchEffect(){
	var bannerHeight=$(".jd_banner")[0].offsetHeight;
	window.onscroll=function(){
		var offsetTop=document.documentElement.scrollTop;
		var opacity=0;
		if(offsetTop<bannerHeight){
			opacity=offsetTop/bannerHeight;
			$(".jd_search").css("backgroundColor","rgba(233,35,34,"+opacity+")")
		}
	}
}
function timeBack() {
	var alltime= 3600;
	var timeid=setInterval(function(){
		alltime--;
		if(alltime<0){
			clearInterval(timeid);
			return;
		}
		
		var h=Math.floor(alltime/3600);
		var m=Math.floor(alltime%3600/60);
		var s=Math.floor(alltime%60);
		$(".jd_sk_time>span")[0].innerHTML=Math.floor(h/10);
		$(".jd_sk_time>span")[1].innerHTML=Math.floor(h%10);
		$(".jd_sk_time>span")[3].innerHTML=Math.floor(m/10);
		$(".jd_sk_time>span")[4].innerHTML=Math.floor(m%10);
		$(".jd_sk_time>span")[6].innerHTML=Math.floor(s/10);
		$(".jd_sk_time>span")[7].innerHTML=Math.floor(s%10);
	},1000)
	
}
/*function bannerEffect(){
	var firstImg=$(".jd_bannerImg>li:first");
	var lastImg=$(".jd_bannerImg>li:last");
	var firstImgCopy=firstImg.clone(true);
	var lastImgCopy=lastImg.clone(true);
	$(".jd_bannerImg").append(firstImgCopy);
	$(".jd_bannerImg").prepend(lastImgCopy);
	var count=$(".jd_bannerImg>li").length;
	var bannerWidth=$(".jd_banner")[0].offsetWidth;
	$(".jd_bannerImg").css("width",count*bannerWidth+"px");
	$(".jd_bannerImg>li").each(function(i,obj){
		$(this).css("width",bannerWidth+"px");
	})
	var index=1;
	$(".jd_bannerImg").css("left",-index*bannerWidth+"px");
	setInterval(function(){
		index++;
		$(".jd_bannerImg")[0].style.transition="left 0.5s ease-in-out";
      	$(".jd_bannerImg").css("left",-index*bannerWidth+"px"); 
      	setTimeout(function(){
      		if(index==count-1){
      			index=1;
      			$(".jd_bannerImg")[0].style.transition="none";
      			$(".jd_bannerImg").css("left",-index*bannerWidth+"px"); 
      			
      		}
      	},500)
		
	},2000)
}
*/