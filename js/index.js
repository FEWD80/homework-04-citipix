$(function(){

	// Function for changeBackground
	$("#submit-btn").click(changeBackground);

	// Declare variable
	var city;

	// Prevent a form submission
	function changeBackground(event){
		event.preventDefault();

		// Get information entered into the text field
		var city = $("#city-type").val();

		// List all possible submits
		if(city === "Austin" || city === "ATX"){
			$('body').css("backgroundImage", "url(images/austin.jpg");
		} 

			else if(city === "Los Angeles" || city === "LA" || city === "LAX"){
			$('body').css("backgroundImage", "url(images/la.jpg");
		} 

			else if(city === "New York City" || city === "New York" || city === "NYC"){
			$('body').css("backgroundImage", "url(images/nyc.jpg");
		}

			else if(city === "San Francisco" || city === "SF" || city === "Bay Area"){
			$('body').css("backgroundImage", "url(images/sf.jpg");
		}

			else if(city === "Sydney" || city === "SYD"){
			$('body').css("backgroundImage", "url(images/sydney.jpg");
		}
			
		// Alert for unknown submits
			else {
			alert("Sorry, background image not found");
		}
	}	

});

