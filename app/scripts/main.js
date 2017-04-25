$(document).ready(function() {

	$('.js-object').owlCarousel({
		items: 1,
		loop:true,
		lazyLoad:true,
		dots: false,
		nav: true,
		navText:[''],

	});

  $('.js-brand').owlCarousel({
   items:6,
   loop:true,
   margin:33,
   autoWidth: true,
   autoplay:true,
   autoplayTimeout:1000,
   autoplayHoverPause:false,
   nav: true,
   navText:['']
 });

});
