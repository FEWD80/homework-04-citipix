$(document).ready(function() {

	// when user .click #submit-btn, perform function change
	$("#submit-btn").click(change);

	// store input in var city
	var city;

	function change(event){
		// prevent form submission
		event.preventDefault();
		// call user input using .val() to get string value
		// change all input to lower case
		city = $("#city-type").val().toLowerCase();

		// add if / else if / else conditionals
		// use || operator to allow multiple string values
		if (city === "nyc" || city === "new york" || city === "new york city"){
			$("body").css("background-image" , "url(images/nyc.jpg)");
		}
		else if (city === "san francisco" || city === "sf" || city === "bay area"){
			$("body").css("background-image" , "url(images/sf.jpg)");
		}
		else if (city === "los angeles" || city === "la" || city === "lax"){
			$("body").css("background-image" , "url(images/la.jpg)");
		}
		else if (city === "austin" || city === "atx"){
			$("body").css("background-image" , "url(images/austin.jpg)");
		}
		else if (city === "sydney" || city === "syd"){
			$("body").css("background-image" , "url(images/sydney.jpg)");
		}
		else {
			alert("Hold up! That city has not been added yet.");
		}
	}

});