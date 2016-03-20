$(function() {
	
	// Declare and initialize variable named city
	var city; //store user input in 'var city'
	
	// Forms are how applications retrieve information from users
	// Listen for a click (submit) event
	$('#submit-btn').click(storeInput);
	
	// Function that stores input (city name) from user into variable
	function storeInput(event) {
		// Prevent a form submission using this function
		event.preventDefault();

		// Store input in variable city
		// .val() gets value from text field
		var city = $('#city-type').val();
			//alert("string entered is " + city);

		// Pass variable to update background image
		updateBackgroundImg(city);
	}

	// Function updates the bg image depending on user input of city name
	function updateBackgroundImg(city) {
		// Check which city is picked
		
		// if city is "New York" or "New York City" or "NYC"
		if (city === "New York" || city === "New York City" || city === "NYC") {
			// make the background of the page nyc.jpg
			$('body').css('backgroundImage', 'url(images/nyc.jpg)');
			
		// else if city is "San Francisco" or "SF" or "Bay Area"
		} else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
			// make the background of the page sf.jpg
			$('body').css('backgroundImage', 'url(images/sf.jpg');

		// else if city is "Los Angeles" or "LA" or "LAX" 
		} else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
			// make the background of the page la.jpg
			$('body').css('backgroundImage', 'url(images/la.jpg');

		// else if city is "Austin" or "ATX" 
		} else if (city === "Austin" || city === "ATX") {
			// make the background of the page austin.jpg
			$('body').css('backgroundImage', 'url(images/austin.jpg');

		// else if city is "Sydney" or "SYD" 
		} else if (city === "Sydney" || city === "SYD") {
			// make the background of the page sydney.jpg
			$('body').css('backgroundImage', 'url(images/sydney.jpg');

		// city has to be chosen from the ones given above (new york, san fran, la, austin, or sydney)
		} else {
			// alert string when user inputs an invalid city
			alert("city invalid, you chose: " + city);
		}

	}

});


