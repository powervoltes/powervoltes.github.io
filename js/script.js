$(document).ready(function(){
	var base_checkout_url = 'blank';
	var body = $('body');
	var current_id = '';
	var single_special_offer_id = 'blank';
	var warrenty_offer_id = '';

	body.on('click', '.selection button', function(){

		current_id = $(this).parents('.selection').data('id');

		var product_div = $(this).parents('.selection');
		if(product_div.hasClass('single_product') || product_div.hasClass('five_product') || product_div.hasClass('eight_product')){
			$('.modal_overlay, #modal_single_special_offer').fadeIn();
			body.addClass('modal_open');
		} else if(product_div.hasClass('five_product') || product_div.hasClass('eight_product')){
			window.location = base_checkout_url + current_id + ':1';
			//$('.modal_overlay, #modal_warrenty_special_offer').fadeIn();
		}
	});

	body.on('click', '.more_package button', function(){
		current_id = $(this).parents('.more_package').data('id');
		$('.modal_overlay, #modal_single_special_offer').fadeIn();
		body.addClass('modal_open');
	});


	body.on('click', '.more_packages > button', function(){
		$('.more_packages > div:nth-child(3)').slideDown(600);
	});

	body.on('click', '.yes_order', function(){
		var full_checkout_url = base_checkout_url + current_id + ':1,';
		var modal = $(this).parents('.modal');
		if(modal.attr('id') === 'modal_single_special_offer'){
			full_checkout_url += single_special_offer_id + ':1'
		} else if(modal.attr('id') === 'modal_warrenty_special_offer'){
			full_checkout_url += warrenty_offer_id + ':1';
		}
		window.location = full_checkout_url;
	});

	body.on('click', '#modal_single_special_offer .no_thanks', function(){
		var full_checkout_url = base_checkout_url + current_id + ':1';
		window.location = full_checkout_url;
	});

	body.on('click', '.open_faq', function(){
		var questions_wrapper = $('.questions_wrapper');
		if(questions_wrapper.is(':visible')){
			questions_wrapper.slideUp();
		} else {
			questions_wrapper.slideDown();
		}
	});

	body.on('click', '.question', function(){
		var question_wrapper = $(this).parents('.question_wrapper');
		var answer = question_wrapper.find('.answer');
		var arrow = question_wrapper.find('.arrow-left');
		if(answer.is(':visible')){
			answer.slideUp();
			arrow.removeClass('rotate_arrow');
		} else {
			answer.slideDown();
			arrow.addClass('rotate_arrow');
		}
	});

	body.on('click', '.privacy_link', function(){
		body.addClass('modal_open');
		$('#privacy_modal, .modal_overlay').fadeIn();
	});

	body.on('click', '.t_and_c_link', function(){
		body.addClass('modal_open');
		$('#t_and_c_modal, .modal_overlay').fadeIn();
	});

	body.on('click', '.close_modal_btn', function(){
		body.removeClass('modal_open');
		$('.modal_wrapper, .modal_overlay').fadeOut();
	});

	body.on('click', '.top_get_btn', function(){
		$('html, body').animate({
			scrollTop: $(".section8").offset().top
		}, 1000);
	});
});