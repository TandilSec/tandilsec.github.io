$(document).ready(function(){

	console.log("Jquery ready");

	//Opacity change on hover
	$(".col-lg-6").mouseenter(function(){
		$(this).css("opacity", "1.0");
	})

	$(".col-lg-6").mouseleave(function(){
		$(this).css("opacity", "0.7");
	});
	
	//mobile menu arrow
	$("#menu-arrow").click(function(){
		$("#navigation").css("visibility","visible").toggle("300");
	});

	$("#facebook-logo").mouseenter(function(){
		$(this).css("width", "58px");
		$(this).css("height", "58px");
	})

	$("#facebook-logo").mouseleave(function(){
		$(this).css("width", "60px");
		$(this).css("height", "60px");
	})

	$("#meetup-logo").mouseenter(function(){
		$(this).css("width", "58px");
		$(this).css("height", "58px");
	})

	$("#meetup-logo").mouseleave(function(){
		$(this).css("width", "60px");
		$(this).css("height", "60px");
	})

});