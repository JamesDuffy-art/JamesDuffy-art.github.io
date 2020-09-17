$(document).ready(function(){
	console.log('hello world');

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');
	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn-hor').click(function(){
		$('.item').addClass('hide');
		$('.item.mag').removeClass('hide');
	});

	$('.btn-sup').click(function(){
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide');
	});

	$('.btn-ama').click(function(){
		$('.item').addClass('hide');
		$('.item.plan').removeClass('hide');
	});

	$('.btn-prop').click(function(){
		$('.item').addClass('hide');
		$('.item.shape').removeClass('hide');
	});

	$('.btn-pat').click(function(){
		$('.item').addClass('hide');
		$('.item.scan').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});

});