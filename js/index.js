$(document).ready(function(){
	
$("#submit-btn").click(toggle);

	var city;

	// create variable called "city"
	

	function toggle(){
		city = $("#city-type").val();
		event.preventDefault();
	
	// get value of var city and change background based on the user input
	// prevent default

		if(city === "la" || city === "los angelas"){
			$("body").attr("class", "la");
	
		} else if(city === "nyc" || city === "new york city"){
			$("body").attr("class", "nyc");

		} else if(city === "atx" || city === "austin"){
			$("body").attr("class", "austin");

		} else if(city === "syd" || city === "sydney"){
			$("body").attr("class", "sydney")

		} else if(city === "sf" || city === "san francisco"){
			$("body").attr("class", "sf")

		} else {
			$("body").attr("class", "body")
		}

	}

	// get value from text field and store in var city

	// if var city === nyc, then change .html background image to nyc
	// if var city === la, then change .html background image to la
	// if var city === sf, then change .html background image to sf
	// if var city === atx, then change .html background image to austin
	// if var city === syd, then change .html background image to sydney
 





});