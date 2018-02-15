
// закрыть на крестик
$('.close-popup').click(function() { 
	$('.popup_overlay').fadeOut();
	$('main').css('filter', 'none');
});
// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.popup_overlay').hasClass('disabled')) {
			return false;
		} else {
			
			$(".popup_overlay").fadeIn();
		}
	}, 500);
});

$(".letter_G").click(function() { 
	$(".letter_G").addClass("letter_G-clicked");
	$(".letter_G").addClass("clicked");
	$(".letter_I").css('pointer-events', 'auto');
	// setTimeout(function(){
	// 	if ($(".letter_G").hasClass("clicked") && 
	// 		$(".letter_I").hasClass("clicked") && 
	// 		$(".letter_F").hasClass("clicked") && 
	// 		$(".letter_T").hasClass("clicked")) {
	// 		alert("Do it");
	// 	} else {
	// 		return false;
	// 	}
	// }, 1000);
});

$('.letter_I').click(function() { 
	$('.letter_I').addClass('letter_I-clicked');
	$('.letter_I').addClass('clicked');
	$(".letter_F").css('pointer-events', 'auto');
	// setTimeout(function(){
	// 	if ($(".letter_G").hasClass("clicked") && 
	// 		$(".letter_I").hasClass("clicked") && 
	// 		$(".letter_F").hasClass("clicked") && 
	// 		$(".letter_T").hasClass("clicked")) {
	// 		alert("Do it");
	// 	} else {
	// 		return false;
	// 	}
	// }, 1000);
	
});

$('.letter_F').click(function() { 
	$('.letter_F').addClass('letter_F-clicked');
	$('.letter_F').addClass('clicked');
	$(".letter_T").css('pointer-events', 'auto');
	// setTimeout(function(){
	// 	if ($(".letter_G").hasClass("clicked") && 
	// 		$(".letter_I").hasClass("clicked") && 
	// 		$(".letter_F").hasClass("clicked") && 
	// 		$(".letter_T").hasClass("clicked")) {
	// 		alert("Do it");
	// 	} else {
	// 		return false;
	// 	}
	// }, 1000);

});

$('.letter_T').click(function() { 
	$('.letter_T').addClass('letter_T-clicked');
	$('.letter_T').addClass('clicked');
	setTimeout(function(){
		if ($(".letter_T").hasClass("clicked")) {
			$('.serpentine_cover').addClass('action');
			setTimeout(function(){
				$( ".popup_bg" ).remove();
				$('.serpentine_cover').removeClass('action');
			},1900)
			setTimeout(function(){
				$('.offer_cover').css('display', 'block');
				$('.offer_cover').addClass('fadeInDown animated');
				$('.offer_text').css('display', 'block');
				$('.text').addClass('fadeInUp animated');
			},700)
		} else {
			return false;
		}
	}, 700);

});


