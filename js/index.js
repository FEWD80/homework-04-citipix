$(function(){ //declare document ready to ensure jQuery code loads last
	var city = ""; //declare an empty string variable

	$('#submitButton').click(changeBackground); //add event listener for a click event

	function changeBackground(event){ //define function and code that's run when the submitButton is clicked
		event.preventDefault(); //prevent data from being sent to server by default
		var city = $('#cityType').val(); //collect text input and save it to city variable
		console.log('test') //ensure click event listener is working via Devtools

		/*add conditional statements to function that explicate what to do 
		when certain strings are inputted into the text field*/

		//if variable equals X Y or Z, change background image accordingly//

		if(city === "New York" || city === "NYC" || city === "New York City"){ 
			$('body').addClass('nyc');
		} else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
			$('body').addClass('sf');
		} else if (city === "LA" || city === "Los Angeles" || city === "LAX"){
			$('body').addClass('la');
		} else if (city === "Austin" || city === "ATX"){
			$('body').addClass('austin');
		} else if (city === "Sydney" || city === "SYD"){
			$('body').addClass('sydney');
		} else { //if variable doesn't equal any of the above strings, display alert that user has entered invalid city//
			alert(city + " is an invalid city");
		}

	}

});
