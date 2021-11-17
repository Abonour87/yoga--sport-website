// $(function(){
	$(window).on("load",function(){
		$(".page-loader").delay(2000).fadeOut()
	})
	$(".carousel").carousel({
		interval:300000
	})
	$(".top-header .flex-tog").click(function(){
		$(".top-header .flex-sl").slideToggle("slow")
	})
// })
$(".nav-bg ul li a").click(function(){
	$("html,body").animate({
		scrollTop:$($(this).data("target")).offset().top
	},1000)
})