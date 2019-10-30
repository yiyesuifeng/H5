$(function(){
	var h = $(window).height(); 
	$("#fullpage").fullpage({
		navigation: true,
		loopBottom: true,
		afterLoad:function(anchorLink,index){
			if (index==2){
				$(".words-01").animate({"opacity":1});
				$(".search").show().animate({"right":"370px"},800,"easeOutBack",function(){
					$(".search-words").animate({"opacity":1},function(){
						$(".search").hide();
						$(".search-02-1").show().animate({"height":"30px","right":"250px","bottom":"450px"});
						$(".goods-02").show().animate({"height":"218px"},800);
						$(".words-02").animate({"opacity":1});
					})
				});
			}
		},
		onLeave: function(index, nextIndex, direction) {
			if(index == 2 && nextIndex == 3) {
				$(".shirt-02").show().animate({"bottom":-(h-250),"width":"207px","left":"260px"},1000,function(){
					$(".img-01-a").animate({"opacity":1},500);
					$(".btn-01-a").animate({"opacity":1},500);
					$(".cover").show();
				})
			}
			if(index == 3 && nextIndex == 4){
				$(".shirt-02").hide();
				$(".t1f").show().animate({"bottom":-(h-200),"left":"-140px"},1000,function(){
					$(".t1f").hide();
					$(".car-img").show();
					$(".car").animate({"left":"120%"},2000,"easeInElastic",function(){
						$(".words-04-a ").animate({"opacity":1},1000);
						$(".note").show();
						$(".note-img").animate({"opacity":1},1000);
					});
				})
			}
			if(index == 4 && nextIndex == 5){
				$(".hand-05").animate({"bottom":"0px"},1500,function(){
					$(".mouse-05-a").animate({"opacity":1},500);
				})
				$(".t1f-05").show().animate({"bottom":"70px"},2000,function(){
					$(".order-05").animate({"bottom":"400px"},2000,function(){
						$(".words-05").addClass("words-05-a");
					})
				})
			}
			if(index == 5 && nextIndex == 6){
				$(".t1f-05").show().animate({"bottom":-(h-500),"left":"40%","width":"65px"},2000,function(){
					$(".t1f-05").hide();
				})
				$(".box-06").animate({"left":"38%"},2000,function(){
					$(this).animate({"bottom":"40px"},500,function(){
						$(this).hide();
						$(".selection6").animate({"backgroundPositionX":"100%"},4000,function(){
							$(".boy").animate({"height":"305px","bottom":"116px"},1000,function(){
								$(this).animate({"right":"500px"},1000,function(){
									$(".door").animate({"opacity":1},500,function(){
										$(".girl").show().animate({"right":"350px","height":"306px"},500,function(){
											$(".pop-07").show();
										})
									})
								})
							})
						})
						$(".words-06-a").show().animate({"left":"30%"},3000,"easeOutElastic");
						$(".pop-06").show();
					})
				})
				
			}
			if(index == 6 && nextIndex == 7){
				setTimeout(function(){
					$(".star").animate({"width":"120px"},3000,function(){
						$(".good-07").show();
					})
				})
			}
			
				$(".beginShoping").hover(function(){
					$(".btn-08-a").show();
				})
				$(document).mousemove(function(event){
					var x=event.pageX-$(".hand-08").width()/2;
					var y=event.pageY+10;
					var minY=h-449;
					if(y<minY){
						y=minY;
					}
					$(".hand-08").css({"left":x,"top":y});
				})
				$(".again").click(function(){
					$.fn.fullpage.moveTo(1);
					$("img,.move").attr("style","")
				})
			
		}
		
	});
	
    for(var i=1;i<=74;i++){
  	var img="<img data-src='picture/"+i+".png'>";
  	$("#circlr").append(img);
  	
  }
     var crl = circlr('circlr', {
            scroll: true,  
            mouse:true,
            cycle:true,
            autoplay:true,
            loader: 'loader'
   });
   
})

