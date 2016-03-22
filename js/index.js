$(function(){

	// Prevent the form from resetting
	$("#entry").click(function(event){
   		event.preventDefault()
	})

	$("#submit-btn").click(switchCityPic);

	// If a city is entered, then the corresponding city photo will display
	function switchCityPic(){
	
		// Get and store the user's input from the field
		var city = ($("#city-type").val());
	
		// List the possible city names 
		if (city === "New York" || city === "New York City" || city === "NYC") {
			// Change the background image to the corresponding city photo
			$("body").css("backgroundImage", "url(images/nyc.jpg");

		} else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
			$("body").css("backgroundImage", "url(images/sf.jpg");

		} else if (city === "Los Angeles" || city === "LA" || city === "LAX" ) {
			$("body").css("backgroundImage", "url(images/la.jpg");
		
		} else if (city === "Austin" || city === "ATX") {
			$("body").css("backgroundImage", "url(images/austin.jpg");

		} else if (city === "Sydney" || city === "SYD") {
			$("body").css("backgroundImage", "url(images/sydney.jpg");
		
		// If none of the above cities are entered, then alert the user to try another city
		} else { 
			$("body").css("backgroundImage", "url(images/citipix_skyline.jpg");
			alert("Oops! Try a different city");
		
		}
	}
});

