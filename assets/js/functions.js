$(document).ready(function() {
	$('#mobile-nav').click(function() {
		$(this).toggleClass('open');
		$('nav').toggleClass('open');
		$('.overlay').toggleClass('open');
	});
});
var lastScrollTop = 0;
$(window).scroll(function(event) {
	var wScroll = $(this).scrollTop();
	var wHeight = $(this).height();

	if ($('nav').hasClass('open')) {
		$(window).scrollTop(0);
	}

	if (wScroll >= wHeight && wScroll < (wHeight * 3)) {
		$('.col:first-child').addClass('scrolling');
		$('.col:first-child').removeClass('scrolled');
		$('.bottom').addClass('hidden');
		if (wScroll < (wHeight * 2)) {
			$('#security').addClass('active');
			$('#flexibility').removeClass('active');
			$('#ease').removeClass('active');
		} else if (wScroll < (wHeight * 3)) {
			$('#security').removeClass('active');
			$('#flexibility').addClass('active');
			$('#ease').removeClass('active');
		} else {
			$('#security').removeClass('active');
			$('#flexibility').removeClass('active');
			$('#ease').addClass('active');
		}

		if (wScroll > lastScrollTop){
			if (wScroll > (wHeight * 1) + 50 && wScroll < (wHeight * 1) + 150) {
				event.preventDefault();
				$("html, body").animate({ scrollTop: $('#flex').offset().top }, 150);
			} else if (wScroll > (wHeight * 2) + 50 && wScroll < (wHeight * 2) + 150) {
				event.preventDefault();
				$("html, body").animate({ scrollTop: $('#eas').offset().top }, 150);
			}
		} else {
			if (wScroll < (wHeight * 2) && wScroll > (wHeight * 2) - 150) {
				event.preventDefault();
				$("html, body").animate({ scrollTop: $('#sec').offset().top }, 150);
			} else if (wScroll < (wHeight * 3) && wScroll > (wHeight * 3) - 150) {
				event.preventDefault();
				$("html, body").animate({ scrollTop: $('#flex').offset().top }, 150);
			}
		}

	} else if (wScroll >= (wHeight * 3) - 2) {
		$('.col:first-child').removeClass('scrolling');
		$('.col:first-child').addClass('scrolled');
		$('#security').removeClass('active');
		$('#flexibility').removeClass('active');
		$('#ease').addClass('active');
		$('.bottom').removeClass('hidden');
	} else {
		$('.col:first-child').removeClass('scrolling');
		$('.col:first-child').removeClass('scrolled');
		$('.bottom').addClass('hidden');
	}

	lastScrollTop = wScroll;
});
