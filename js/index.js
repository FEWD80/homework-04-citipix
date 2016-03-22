$(function(){

var city;



// ];
	 //on click, look at contents of field input
	 //change background image based on corresponding keyword (city name) or abbreviation

	// if user types in "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	// if user types in "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	// if user types in "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	// if user types in "Austin" or "ATX" make the background of the page austin.jpg
	// if user types in "Sydney" or "SYD" make the background of the page sydney.jpg


	// button ID = #submit-btn
	// form ID = #city-type

var userEntry;

  $("#submit-btn").click(changeBackgroundImage);

  function changeBackgroundImage(event) {
    
    event.preventDefault();

	userEntry = $('#city-type').val();
  	console.log(userEntry);


  		if(userEntry === "new york" || "nyc" || "new york city" || "NYC" || "New York City" || "New York") {
  			$("body").css("backgroundImage", "url(../homework-04-citipix/images/nyc.jpg)"); }

  		else if(userEntry === "San Francisco" || "san francisco" || "sf" || "SF" || "bay area" || "Bay Area") {
			$("body").css("backgroundImage", "url(../homework-04-citipix/images/sf.jpg"); }

  		else if(userEntry === "Los Angeles" || "los angeles" || "LA" || "la" || "LAX" || "lax") {
			$("body").css("backgroundImage", "url(../homework-04-citipix/images/la.jpg"); }
  		
		else if(userEntry === "Austin" || "austin" || "ATX") {
			$("body").css("backgroundImage", "url(../homework-04-citipix/images/austin.jpg"); }

		else if(userEntry === "Sydney" || "sydney" || "SYD" || "syd") {
			$("body").css("backgroundImage", "url(../homework-04-citipix/images/sydney.jpg"); }

		else { 
			alert("Your city is WRONNGGGGG");
		}

    }

});


// ###Technical Requirements

// - Call ```$.val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button

// if( ) {
// 	what ever I want to happen

// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a form submission using the ```event.preventDefault()``` function
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code








