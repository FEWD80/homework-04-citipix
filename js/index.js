$(function(){
		// On click run function changeCity
		$("#submit-btn").click(changeCity);
		
		// Set variable
		var city;
		
		// Set function - notice (event) in the function applies 
		// to the prevent default
		function changeCity(event){
		// Apply preventDefault within function
		event.preventDefault();

		// Pull user information from the text-field 
		// Use ".toLowerCase()" to make site more user friendly
			city = $("#city-type").val().toLowerCase();
		
		// Apply conditionals
			if(city === "nyc" || city === "new york" || city === "new york city"){
				$('body').attr('class' , 'nyc');
			}
			else if(city === "san francisco" || city === "sf" || city === "bay area"){
				// alert("SF has been written");
				$('body').attr('class' , 'sf');
			}
			else if(city ===  "los angeles" || city === "la" || city === "lax"){
				// alert("SF has been written");
				$('body').attr('class' , 'la');
			}
			else if(city ===  "austin" || city === "atx"){
				// alert("SF has been written");
				$('body').attr('class' , 'austin');
			}
			else if(city ===  "sydney" || city === "syd"){
				// alert("SF has been written");
				$('body').attr('class' , 'sydney');
			}
			else{
				alert("Sorry your city has not yet been added!")
			}
		}
// END
});



