$(function(){

	var city;

	$("form").submit(swapBackground);

	function swapBackground(event){
		event.preventDefault();
		$("body").removeClass();

		
		city = $("#city-type").val().toLowerCase();
		
		if (city === "nyc" || city === "new york" || city === "new york city" || city === "ny"){
			$("body").addClass("nyc");
		};

		if (city === "sf" || city === "san francisco"){
			$("body").addClass("sf");
		};

		if (city === "la" || city === "los angeles"){
			$("body").addClass("la");
		};

		if (city === "austin" || city === "aus" || city === "atx"){
			$("body").addClass("austin");
		};

		if (city === "sydney" || city === "syd"){
			$("body").addClass("sydney");
		};





	};

	// 

});

// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// Create if / else if / else conditionals to control the flow of your application
// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Prevent a form submission using the event.preventDefault() function
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
// Get the first element from an attribute name using $.attr()
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg