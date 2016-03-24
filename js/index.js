$(function(){
	$('form').submit(getInput);

	function getInput(event) {
		event.preventDefault();
		var userInput;
		userInput = $('#city-type').val().toLowerCase();
		changeBackground(userInput);
	}

	function changeBackground(userInput){
		if (userInput === "austin" || userInput === "atx"){
			$('body').removeClass().addClass('austin');
		}
		else if(userInput === "la" || userInput === "los angeles" || userInput === "lax"){
			$('body').removeClass().addClass('la');	
		}
		else if(userInput === "nyc" || userInput === "new york" || userInput === "new york city"){
			$('body').removeClass().addClass('nyc');	
		}
		else if(userInput === "sf" || userInput === "san francisco" || userInput === "bay area"){
			$('body').removeClass().addClass('sf');	
		}
		else if(userInput === "sydney" || userInput === "syd"){
			$('body').removeClass().addClass('sydney');	
		}
		else {
			alert('Enter valid city');
		}
	}

	
});