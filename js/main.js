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

//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    // $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
