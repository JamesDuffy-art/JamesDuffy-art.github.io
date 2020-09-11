$(document).ready(function(){
	console.log('hello world');

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');
	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('.btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});

	$('.btn-alert').click(function(){
		$('.alert').toggleClass('active');
	});

});