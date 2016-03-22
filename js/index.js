$(function(){
	//establish variable called city
	//this variable will be manipulated later to call differnet 'if/else if' functions

	var city;

	//create a function that stores the user input

	$('#submit-btn').click(storeUserInput);


	// alert('text');
	//use prevent default function to prevent default behavior
	function storeUserInput(event) {
		event.preventDefault();
		var city = $('#city-type').val();
		console.log('test');

		//create if/else if functions with city names



		//NYC 
		if (city === "New York" || city === "New York City" || city === "NYC") {
			$('body').css('background', 'url(images/nyc.jpg)');
				
		//SF
			} else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
			$('body').css('background', 'url(images/sf.jpg');

		//LA		
			} else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
			$('body').css('background', 'url(images/la.jpg)');

		//Austin
			} else if (city === "Austin" || city === "ATX") {
			$('body').css('background', 'url(images/austin.jpg');

		//Sydney
			} else if (city === "Sydney" || city === "SYD") {
			$('body').css('background', 'url(images/sydney.jpg');

		//Seoul 
			} else if (city === "Seoul" || city === "SEL") {
			$('body').css('background', 'url(images/seoul.jpg')		


		//Mars
			} else if (city === "Mars" || city === "mars") {
			$('body').css('background', 'url(images/mars.jpg');


			

		//If the the city is not listed above give error message
			} else {
			alert("city invalid, you chose: " + city);
			}

		}

	});






