$(document).ready(function() {
	//So we want to listen for the input in the field
	$('#submit-btn').click(main);
	//Pseudo Code 
	// So first we're going to establish a variable to keep the city value
	// We'll call a main function and in there we will call another function for the purposes of getting the value
	// In this other function we take in the value from the field and store it in the city variable
	// Once more in the main function with the updated city variable 
	// The main then has a cascading if else set which determines which image to replace the background with
	// In each if statement we check the value 
	var city;
	function getValue() {
		city = $('#city-type').val();
		// alert("The value is "+input);
		// return input;
	}
	function main(event){
		//alert("The value is "+city);
		event.preventDefault();
		getValue();
		//alert("The value is "+city);
		if (city === "ATX" || city === "Austin") {
			//The city they have selected is austin
			//alert("The city selected is Austin");
			$('body').css('background-image', 'url(images/austin.jpg)');
			//var yo = $.attr('city');
			//alert ("This is yo "+ yo);
			//$('body').attr('background-image', 'url(images/austin.jpg)');
		} else if (city === "LA" || city === "LAX" || city === "Los Angeles") {
			//alert("The city selected is LA");
			$('body').css('background-image', 'url(images/la.jpg)');

		} else if (city === "NYC" || city === "New York City" || city === "New York") {
			//alert("The city selected is NYC");
			$('body').css('background-image', 'url(images/nyc.jpg)');

		} else if (city === "SF" || city === "San Francisco" || city === "Bay Area"){
			//alert("The city selected is San Francisco");
			$('body').css('background-image', 'url(images/sf.jpg)');

		}else if (city === "Sydney" || city === "SYD") {
			//alert("The city selected is Sydney");
			$('body').css('background-image', 'url(images/sydney.jpg)');
		} else {
			alert("Your input does not match any in our database");
		}

	}

});