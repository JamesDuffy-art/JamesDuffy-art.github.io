$(document).ready(function(){
	console.log('hello world');


	$('.btn-hor').click(function(){
		$('.item').addClass('hide');
		$('.item.hor').removeClass('hide');
	});

	$('.btn-sup').click(function(){
		$('.item').addClass('hide');
		$('.item.sup').removeClass('hide');
	});

	$('.btn-ama').click(function(){
		$('.item').addClass('hide');
		$('.item.ama').removeClass('hide');
	});

	$('.btn-prop').click(function(){
		$('.item').addClass('hide');
		$('.item.prop').removeClass('hide');
	});

	$('.btn-pat').click(function(){
		$('.item').addClass('hide');
		$('.item.pat').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});

});