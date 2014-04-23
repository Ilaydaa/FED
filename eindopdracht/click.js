$( document ).ready(function() {

	$( "nav ul li:nth-of-type(2) ul li" ).hide();

	$( "nav ul li:nth-of-type(2) a" ).click(function(event) {
		event.preventDefault();
	  	$( "nav ul li:nth-of-type(2) ul li" ).slideToggle();
	});

	$( "footer section ul li:first-of-type a" ).click(function(event) {
		event.preventDefault();
	  	$( "footer section ul li:first-of-type ul li" ).slideToggle();
	});

	$( "footer section ul li:nth-of-type(2) a" ).click(function(event) {
		event.preventDefault();
	  	$( "footer section ul li:nth-of-type(2) ul li" ).slideToggle();
	});

	$( "footer section ul li:nth-of-type(3) a" ).click(function(event) {
		event.preventDefault();
	  	$( "footer section ul li:nth-of-type(3) ul li" ).slideToggle();
	});

	$( "footer section ul li:nth-of-type(4) a" ).click(function(event) {
		event.preventDefault();
	  	$( "footer section ul li:nth-of-type(4) ul li" ).slideToggle();
	});

});
