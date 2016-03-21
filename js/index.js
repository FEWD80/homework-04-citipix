$(document).ready(function(){

	$("#submit-btn").click(updatePhoto);
	//listen for click to collect keyword entry

	function updatePhoto(event) {
		event.preventDefault();	
		
		//store keyword entry
		var = city;
		
		//get keyword entry
		city = $("#city-type").val();

		//validate entry to match proper class in css
		//use conditionals to add variations of city
		//change background and choose from class provided from style.css

		if (city === NYC || city === New York City || city === New York) {
			$("body").attr("class",".nyc");
		};

		else if (city === SF || city === San Francisco || city === Bay Area) {
			$("body").attr("class",".sf");
		};

		else if (city === LA || city === Los Angeles || city === LAX) {
			$("body").attr("class",".la");
		};

		else if (city === ATX || city === Austin) {
			$("body").attr("class",".austin");

		};
		else if (city === SYD || city === Sydney) {
			$("body").attr("class",".sydney");
		};
		
		else {
			alert ("Sorry, city is unavailable");
		};

	}


});

