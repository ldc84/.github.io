$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	// $("#testimonial-slider").owlCarousel({
	//     paginationSpeed : 500,
	//     singleItem:true,
	//     autoPlay: 3000,
	// });




	// $("#clients-logo").owlCarousel({
	// 	autoPlay: 3000,
	// 	items : 5,
	// 	itemsDesktop : [1199,5],
	// 	itemsDesktopSmall : [979,5],
	// });

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	// 20170403 추가
	var win = $(window),
		header = $('header'),
		logo = header.find('.navbar-brand'),
		quickTop = $('#quickTop');

	// quick top
	quickTop.on('click', function(){

		$('html, body').animate({
			scrollTop:0
		}, 300);

		return false;
	});


	// scroll
	win.on('load scroll', function(){
		var winTop = win.scrollTop();

		if (winTop > 120) {
			header.addClass('move');
			logo.addClass('animated flipInY');
			quickTop.addClass('active animated bounceInUp');
		}else {
			header.removeClass('move');
			logo.removeClass('animated flipInY');
			quickTop.removeClass('active animated bounceInUp');
		}
	});


});
