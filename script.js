$(document).ready(function() {
console.log('Hello world!');
	
	for(j = 0; j < 20; j++)
	{
		$('.grid').append('<div class = "row"></div>');
	}

	for(i = 0; i < 20; i++){
		$('.row').append('<div class="square"></div>');
	}

	$('.square').addClass('box');

	$('.square').hover(function (){
		$(this).css("background-color",'#000000');
	});

});