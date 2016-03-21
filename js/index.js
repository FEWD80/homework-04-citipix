$(document).ready(function(){

	$("#submit-btn").click(updatePhoto);
	//listen for click on id of submit button
	//collect keyword entry

	function updatePhoto(event) {
		event.preventDefault();	
		
		//store keyword entry as a variable of city
		var = city;
		
		//get keyword entry
		//convert to lower case
		city = $("#city-type").val().toLowerCase();

		//validate entry to match proper class in css
		//use conditionals to add variations of city
		//change background and choose from class provided from style.css

		if (city === 'NYC' || city === 'New York City' || city === 'New York' || ) {
			$("body").attr('class','nyc');
		};

		else if (city === 'SF' || city === 'San Francisco' || city === 'Bay Area') {
			$("body").attr('class','sf');
		};

		else if (city === 'LA' || city === 'Los Angeles' || city === 'LAX') {
			$("body").attr('class','la');
		};

		else if (city === 'ATX' || city === 'Austin') {
			$("body").attr('class','austin');

		};
		else if (city === 'SYD' || city === 'Sydney') {
			$("body").attr('class','nyc');
		};
		
		else {
			alert ("Sorry, city is unavailable");
		};

	}


});

