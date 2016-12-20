/*Case*/
$(function(){
	$(".case-listOver").height($(".case-listOver a").height());
	if($(window).width()<=990&&$(".case-listTop").length%2!=0){
		$(".case-listTop").eq(0).css({display:"none"});
	}
});
/*news*/
$(function(){
	$(".pagination").css({marginLeft:"-"+17*$(".pagination a").length+"px"});
	$(".pagination a").on("click",function(){
		if($(this).index()!=($(".pagination a").length-1)&&$(this).index()!=0){
			$(".pagination a").removeClass("page-active");
			$(this).addClass("page-active");	
		}else if($(this).index()==0){
			$(".pagination a").each(function(){
				if($(this).hasClass("page-active")&&$(this).index()!=1){
					$(this).removeClass("page-active");
					$(".pagination a").eq($(this).index()-1).addClass("page-active");
					return false;
				}
			})
		}else{
			$(".pagination a").each(function(){
				if($(this).hasClass("page-active")&&$(this).index()!=($(".pagination a").length-2)){
					$(this).removeClass("page-active");
					$(".pagination a").eq($(this).index()+1).addClass("page-active");
					return false;
				}
			})
		}
	})	
});
$(function(){
	$(".news-detailsCont div img").addClass("img-responsive");
})
/*contact*/
$(function(){
	$(".contact-location").on("click",function(){
		$(".map-mask").css({display:"block"});
	})
	$(".map-mask .close").on("click",function(){
		$(".map-mask").css({display:"none"});
	})
})
/*about*/
$(function(){
	if($(window).width()>=1200){
		$(".about-teamPic").width($(".about-teamList").length*300);
		$(".about-teamList").each(function(){
			if (($(this).index()+1)%4==0) {
				$(".about-teamCircle").append("<span></span>");
			}
		})
		$(".about-teamCircle span").eq(0).css({backgroundColor:"#a5c702"});
		$(".about-teamCircle").css({marginLeft:(600-$(".about-teamCircle span").length*24)});
		$(".about-teamCircle span").on("click",function(){
			clearInterval(autoTime);
			$(".about-teamCircle span").css({backgroundColor:"#fff"});
			$(".about-teamPic").animate({marginLeft:"-"+$(this).index()*1200+"px"});
			$(this).css({backgroundColor:"#a5c702"});
		})
		var x=0;
		autoTime=setInterval(function(){
			x+=1;
			if(x>=3){
				x=0;
			}
			$(".about-teamCircle span").css({backgroundColor:"#fff"});
			$(".about-teamPic").animate({marginLeft:"-"+x*1200+"px"});
			$(".about-teamCircle span").eq(x).css({backgroundColor:"#a5c702"});
		},2000)
	}else if($(window).width()>=768){
		$(".about-teamPic").width($(".about-teamList").length*350);
		$(".about-teamList").each(function(){
			if (($(this).index()+1)%2==0) {
				$(".about-teamCircle").append("<span></span>");
			}
		})
		$(".about-teamCircle span").eq(0).css({backgroundColor:"#a5c702"});
		$(".about-teamCircle").css({marginLeft:(350-$(".about-teamCircle span").length*24)});
		$(".about-teamCircle span").on("click",function(){
			clearInterval(autoTime);
			$(".about-teamCircle span").css({backgroundColor:"#fff"});
			$(".about-teamPic").animate({marginLeft:"-"+$(this).index()*700+"px"});
			$(this).css({backgroundColor:"#a5c702"});
		})
		var x=0;
		autoTime=setInterval(function(){
			x+=1;
			if(x>=3){
				x=0;
			}
			$(".about-teamCircle span").css({backgroundColor:"#fff"});
			$(".about-teamPic").animate({marginLeft:"-"+x*700+"px"});
			$(".about-teamCircle span").eq(x).css({backgroundColor:"#a5c702"});
		},2000)
	}
	$(".mob-team div img").each(function(){
		$(this).parent().siblings().height($(this).height());
	})
	function set(st,ed,cls){
		var x=st;
		if (st<ed) {
			var set2009=setInterval(function(){
				x+=1;
				if (x>=ed) {
					clearInterval(set2009);
				}
				$(cls).html(x);
			},100);	
		}else{
			var set2009=setInterval(function(){
				x-=1;
				if (x<=ed) {
					clearInterval(set2009);
				}
				$(cls).html(x);
			},100);	
		}
	}
	set(2018,2009,".info2009");
	set(0,4,".info4");
	set(10,0,".info0");
})
/* service Band*/
$(function(){
	$(".service-bandBanWord").css({marginLeft:"-"+$(".service-bandBanWord").width()*0.5+"px",marginTop:"-"+$(".service-bandBanWord").height()*0.5+"px"});
	$(".service-bd-ad").css({marginLeft:"-"+$(".service-bd-ad").width()*0.5+"px",marginTop:"-"+$(".service-bd-ad").height()*0.5+"px"});
	if ($(window).width()<=760) {
		$(".service-bandCircle01 span").height($(".service-bandCircle01 span").width());
	}
})
