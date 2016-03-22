$(function(){

	var city;

	$("#submit-btn").click(updatePhoto);
	//listen for click on id of submit button
	//collect keyword entry

	function updatePhoto(event) {
		event.preventDefault();	
		
		//store keyword entry as a variable of city
		//get keyword entry
		var city = $('#city-type').val();
		console.log('test');

		//use conditionals for variations of entries per city
		//validate entry to match proper class in css
		//change background and choose from class provided in style.css

		if (city === 'NYC' || city === 'New York City' || city === 'New York') {
			$('body').attr('class','nyc');
		}

		else if (city === 'SF' || city === 'San Francisco' || city === 'Bay Area') {
			$('body').attr('class','sf');
		}

		else if (city === 'LA' || city === 'Los Angeles' || city === 'LAX') {
			$('body').attr('class','la');
		}

		else if (city === 'ATX' || city === 'Austin') {
			$('body').attr('class','austin');

		}
		else if (city === 'SYD' || city === 'Sydney') {
			$('body').attr('class','nyc');
		}

		else {
			alert('Sorry,' + city + ' is unavailable');
		}

	}

});

