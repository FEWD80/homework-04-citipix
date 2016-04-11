$(function(){


   

	$('#submit-btn').click(cityPhoto);

	var city;

	function cityPhoto(event) {
	 	event.preventDefault();

		var city = $('#city-type').val();
		console.log("you typed " + city);
			

		if (city === "nyc" || city === "New York City"  || city === "New York"  || city === "ny")	{
			$('body').attr("class" , "nyc");
		} 
		else if (city === "sf" || city === "San Francisco"  || city === "Bay Area"){
			$('body').attr("class" , "sf");
		} 
		else if (city === "Los Angeles" || city === "la"  || city === "lax"){
			$('body').attr("class" , "la");
		} 
		else if (city === "Austin" || city === "atx"){
			$('body').attr("class" , "austin");	
		} 
		else if (city === "Sydney" || city === "syd"){
			$('body').attr("class" , "sydney");		
		} 
		else { alert("Awesome! You go live in " + city);
		
		}


	}


});


