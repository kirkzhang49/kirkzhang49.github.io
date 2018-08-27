

$(window).on("load",function(){
	$(".loader .inner").fadeOut(600,function(){
		$(".loader").fadeOut(850);
	});
})


$(document).ready(function(){

	$('#slides').superslides({
		animation:'fade',
		play:4000,
	});

	var typed = new Typed(".typed",{
		strings:["Full Stack Developer","Software Engineer","Web Developer ."],
		typeSpeed:70,
		loop:true,
		startDelay:1000,
		showCursor:false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	        	items:4
	        }
	    }
	});
	

	   var skillsTopOffset = $(".skillsSection").offset().top;
	   var statsTopSection = $(".statsSection").offset().top;
	   var countUpFinished = false;

	   $(window).scroll(function(){
	   	// console.log(window.pageYOffset) how far you go from the top - height of window as sonn as get the value 200 for delay
	   		if(window.pageYOffset>skillsTopOffset-$(window).height()+200){
	 		 $('.chart').easyPieChart({
		   		easing:'easeInOut',
		   		barColor:'#fff',
		   		trackColor:false,
		   		scaleColor:false,
		   		lineWidth:4,
		   		size:152,
	   		onStep:function(from,to,percent){
	   			$(this.el).find('.percent').text(Math.round(percent));
	   		}
        });
	   		}
	   		if(!countUpFinished && window.pageYOffset>statsTopSection-$(window).height()+200){

				   $(".counter").each(function(){
				   		var element = $(this);
				   		var endVal = parseInt(element.text());
				   		element.countup(endVal);
				   });
				   countUpFinished=true;
			}

	   });

	   	   
	   $("[data-fancybox]").fancybox();

	   $(".items").isotope({
	   	filter:'*',
	   	animationOptions:{
	   		duration:1500,
	   		easing:'linear',
	   		queue:false
	   	}
	   })

	   $("#filters a").click(function(){
	   	$("#filters .current").removeClass("current");
	   	$(this).addClass("current");// refer to object you click event on 
	   	var selector = $(this).attr("data-filter");

	   $(".items").isotope({
	   	filter:selector,
	   	animationOptions:{
	   		duration:1500,
	   		easing:'linear',
	   		queue:false
	   	}
	   });
	   return false; //stop do any other activity

	   });


	   $("#navigation li a").click(function(e){
	   		e.preventDefault();
	   		var targetElement = $(this).attr("href");
	   		var targetPosition = $(targetElement).offset().top;
	   		console.log(targetPosition)
	   		$("html,body").animate({ scrollTop:targetPosition - 50 } ,"slow");
	   		 // go to the target position with animation
	   });


	   const nav = $("#navigation");
	   const navTop = nav.offset().top;

	   $(window).on("scroll",stickyNavigation);

	   function stickyNavigation(){
	   	const body = $("body");
	   	if ($(window).scrollTop() >= navTop){
	   		body.css("padding-top",nav.outerHeight()+"px");
	   		body.addClass("fixedNav");
	   	} else {
	   		body.css("padding-top","0px");
	   		body.removeClass("fixedNav");
	   	}
	   }

});