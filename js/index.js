$(function(){
	
	$('#cityForm').submit(updateBackground);

	function updateBackground(e) {
		e.preventDefault();
		var cityName = $('#city-type').val().toLowerCase();


		if (cityName === 'ny' || cityName === 'nyc' || cityName === 'new york city') {
			$('body').attr('class', 'nyc');
		} else if (cityName === 'la' || cityName === 'los angeles') {
			$('body').attr('class', 'la');
		} else if (cityName === 'sf' || cityName === 'bay area') {
			$('body').attr('class', 'sf');
		} else if (cityName === 'austin' || cityName === 'atx'){
			$('body').attr('class', 'austin');
		} else if (cityName === 'sydney' || cityName ==='syd') {
			$('body').attr('class', 'sydney');
		} else {
			$('body').attr("class", "citiPix");
		}
	}	
	//create an event function that captures #city-type input
	//stop form from trying to communicate with back-end server
	//input city name
	//click update and change background image to requested city
	//make multiple input options for each city
	//set a default if no, or wrong information is entered
});