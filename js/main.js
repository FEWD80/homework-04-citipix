// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// Create if / else if / else conditionals to control the flow of your application
// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Prevent a form submission using the event.preventDefault() function
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg

// 1. store the different input values
// 2. call function that determines photo if user inputs New York
// 3. call function that determines photo if user inputs Los Angeles
// 4. call function that determines photo if user inputs Austin
// 5. call function that determines photo if user inputs Sydney
// 6. call function that changes the image when user hits submit


$(function(){
	
	// 1. store the different input values 
	// 2. get the values input into the input field
	// 3. define the different possible variables
	function inputCity(){
		$("#city-type").val() = {
    		var NewYork = ["New York", "New York City", "NYC"]
			var SanFrancisco = ["San Francisco", "SF", "Bay Area"]
			var LosAngeles = ["Los Angeles", "LA", "LAX"]
			var Austin = ["Austin", "ATX"]
			var Sydney = ["Sydney", "SYD"]
    	};
    }

	$("#submit-btn").click(function(){
    	if (inputCity === 'NewYork') {
    		$('body').css('background','url(../images/nyc.jpg)');
    	}
    	else if (inputCity === 'SanFrancisco') {
    		$('body').css('background','url(../images/sf.jpg)');
    	}
    	else if (inputCity === 'LosAngeles') {
    		$('body').css('background','url(../images/la.jpg)');
    	}
    	else if (inputCity === 'Austin') {
    		$('body').css('background','url(../images/austin.jpg)');
    	}
    	else (inputCity === 'Sydney') {
    		$('body').css('background','url(../images/sydney.jpg)');
    	};
	});


});