$(document).ready(function() {
	
	$('.js-object').owlCarousel({
		items: 1,
		loop:true,
		lazyLoad:true,
		dots: false,
		nav: true,
		navText:[''],

	});

	$('.js-drop').on('click', function(event) {
		event.preventDefault();
		$('.js-drop').not(this).parent().removeClass('open');
		$('.js-drop').not(this).next().slideUp();
  	$(this).parent().toggleClass('open');
  	$(this).next().slideToggle();
	});


  $('.js-nav-toggle').on('click', function(event) {
		event.preventDefault();
		$('.js-nav-toggle').not(this).removeClass('-active');
		$('.js-nav-toggle').not(this).next().slideUp();
  	$(this).toggleClass('-active');
  	$(this).next().slideToggle();
	});

  var catal = $('.header__bottom .js-dropdown-menu').html();
  var mnav = $('.header__bottom .js-in-mobile').html();

  $('.mmenu-nav ul').html('<li><a>Каталог</a><ul>'+catal+'</ul></li>'+mnav)


  var $menu = $('.mmenu-nav').mmenu({
  	navbar: {
  		title: 'Меню'
  	},
  	extensions: [
  	'fx-menu-slide',
  	'fx-listitems-slide',
  	'border-full',
  	'pagedim-black'
  	],
  	offCanvas: {
  		'position': 'left'
  	},
  	counters: true
  });
  var $icon = $('.js-navtrigger');
  var API = $menu.data( 'mmenu' );
  $icon.on( 'click', function() {
  	API.open();
  });
  API.bind( 'open:start', function( $panel ) {
  	$('.js-navtrigger').toggleClass('-active');
  });
  API.bind( 'close:start', function( $panel ) {
  	$('.js-navtrigger').toggleClass('-active');
  });


});
