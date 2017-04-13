

$(document).ready(function(){




		// var scr = $(".main-wrapper").height() > $('body').height();

	// var flsm1 = true; 
	// var flsm2 = true; 

	// $(window).on('load resize', function() {

	// 	/*CHECK WIDTH 1 ITERATION*/
	// 	if (window.innerWidth <= 991) {
	// 		flsm2 = true;
	// 		if (flsm1) {
	// 			flsm1 = false;

	// 		}
	// 	} else {
	// 		flsm1 = true;
	// 		if (flsm2) {
	// 			flsm2 = false; 

	// 		}
	// 	}

	// });





	$('.js-hamburger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.nav').slideToggle();
	});


	/* SLICK_SLIDER */
	// if ($('.your-class').length) {
	// 	$('.your-class').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		dots: true,
	// 		centerMode: false,
	// 		centerPadding: '30px',
	// 		touchMove: false,
	// 		draggable: false,
	// 		responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				dots: false,
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 668,
	// 			settings: {
	// 				dots: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 		]
	// 	});
	// };






	/*MATCHHEIGHT*/
	// $('.your-class').matchHeight()

	/*FANCYBOX*/
	// $(".fancybox").fancybox({
	// 	'hideOnContentClick': true,
	// 	minWidth : 230,
	// 	padding : 0,
	// 	closeBtn : true
	// });


	/*SCROLL TO*/
	// $('header a[href^="#"]').on('click', function(event) {
	// 	var target = $( $(this).attr('href') );
	// 	if( target.length ) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: target.offset().top -35
	// 		}, 600);
	// 	}
	// });


	/*MASK JQUERY*/
	// jQuery(function($){ 
	// 	$('input[type=tel]').mask("+7 (999) 999-99-99");
	// });


	/*HIDE PLACEHOLDER*/
	// $('input,textarea').focus(function(){
	// 	$(this).data('placeholder',$(this).attr('placeholder'))
	// 	.attr('placeholder','');
	// }).blur(function(){
	// 	$(this).attr('placeholder',$(this).data('placeholder'));
	// });






	/*YANDEX MAP*/
	// if ($('.map-wrapp').length) {
	// 	ymaps.ready(init);
	// 	function init(){
	// 		var myMap=new ymaps.Map("map-canvas",{
	// 			center:[44.499022, 34.174761],
	// 			zoom:15,
	// 			controls:['zoomControl']
	// 		}),
	// 		Placemark1=new ymaps.Placemark([44.499022, 34.174761],{
	// 			balloonContent:'',
	// 			hintContent:'',
	// 		},{
	// 			preset:'islands#redDotIcon'
	// 		})
	// 		myMap.geoObjects.add(Placemark1);
	// 		myMap.behaviors.disable('scrollZoom');
	// 	}
	// };



	/*deletecookie*/
	// $(document).on('click', 'a', function() {
	// 	if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	// 		eraseCookie('txt-c');
	// 		eraseCookie('select-c');
	// 	}
	// });


	/*check-form*/
	// $('#feedback-valid-1').validate({
	// 	rules:{
	// 		"phone":{required:true}
	// 	},
	// 	messages:{
	// 		"phone":{required:""}
	// 	},
	// 	submitHandler: function(form){
	// 		$(form).ajaxSubmit({
	// 			success: function(data) {
	// 				if (data == "true")
	// 				{
	// 					$(':input','#feedback-valid-1')
	// 					.not(':button, :submit, :reset, :hidden')
	// 					.val('')
	// 					.removeAttr('checked')
	// 					.removeAttr('selected');
	// 						// window.location.href = "thx1.html";
	// 						$.fancybox.close()
	// 						var message = $('.modal');
	// 						$.fancybox(message);

	// 					}
	// 				}  
	// 			}); 
	// 	}
	// });


	// function createCookie(name,value,days) {
	// 	var expires = "";
	// 	if (days) {
	// 		var date = new Date();
	// 		date.setTime(date.getTime() + (days*24*60*60*1000));
	// 		expires = "; expires=" + date.toUTCString();
	// 	}
	// 	document.cookie = name + "=" + value + expires + "; path=/";
	// }

	// function readCookie(name) {
	// 	var nameEQ = name + "=";
	// 	var ca = document.cookie.split(';');
	// 	for(var i=0;i < ca.length;i++) {
	// 		var c = ca[i];
	// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
	// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	// 	}
	// 	return undefined;
	// }

	// function eraseCookie(name) {
	// 	createCookie(name,"",-1);
	// }




});