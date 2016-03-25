$(function(){

	//listen for click event
	$("#submit-btn").click(switchPhoto);

	function switchPhoto(event) {
		event.preventDefault();	
		
	//store entry as city variable, convert to lowercase
	var city = $('#city-type').val().toLowerCase();

		//New York
			if (city === 'nyc' || city === 'new york city' || city === 'new york') {
				$('body').attr('class','nyc');
			}

		//San Francisco
			else if (city === 'sf' || city === 'San Francisco' || city === 'bay area') {
				$('body').attr('class','sf');
			}

		//Los Angeles
			else if (city === 'la' || city === 'los angeles' || city === 'lax') {
				$('body').attr('class','la');
			}

		//Austin
			else if (city === 'atx' || city === 'austin') {
				$('body').attr('class','austin');
			}
		//Sydney
			else if (city === 'syd' || city === 'sydney') {
				$('body').attr('class','sydney');
			}

		//Error message
			else {
				alert('Sorry, ' + city + ' is not supported. Try New York, San Francisco, Los Angeles, Austin, or Sydney.');
			}

	}

});