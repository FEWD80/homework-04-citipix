$(document).ready(function(){

//print background based on city entered.
//reset background with new submit.

//listen for user clicking 'submit'
$("#submit-btn").click(changeBackground);

function changeBackground(event) {

	event.preventDefault();

//story entry
	var city = $("#city-type").val();

//match entry with proper css class 

	if(city === "NYC" || city === "new york city" || city === "new york"){
		$("body").attr("class", "nyc");
	}

	else if(city === "SF" || city === "san francisco" || city === "bay area"){
		$("body").attr("class", "sf");
	}

	else if(city === "LA" || city === "los angeles" || city === "LAX"){
		$("body").attr("class", "la");
	}

	else if(city === "ATX" || city === "austin"){
		$("body").attr("class", "austin");
	}

	else if(city === "sydney" || city === "SYD"){
		$("body").attr("class", "sydney");
	}


}
});