
$(function(){
	$("form").submit(function(ev){
		ev.preventDefault();
		// declare input type and what is should "get"
		var city = $("#city-type").val().toLowerCase().trim();

// option 1: if user inputs san fran or other names for it
		if(city === "san francisco" || city === "sf" || city === "bay area"){
			$("body").addClass("sf");
		} else
		// option 2: if user inputs new york or other names for it
		if(city === "new york" || city === "new york city" || city === "nyc"){
			$("body").addClass("nyc");
		} else
		// option 3: if user inputs los angeles or other names for it
		if(city === "los angeles" || city === "la" || city === "lax"){
			$("body").addClass("la");
		} else
		// option 4: if user inputs austin or other names for it
		if(city === "austin" || city === "atx"){
			$("body").addClass("tx");
		} else
		// option 5: if user inputs sydney or other names for it
		if(city === "sydney" || city === "syd"){
			$("body").addClass("syd");
		} else{
			// option 6: if user inputs city other than listed above
			alert("I Do Not Recognize That City");
		}

	});

});