$(function(){

	//declaring a variable
	var textInput;

	$("#submit-btn").click(changeCity);
	
	//When clicking prevet default
	function changeCity(event){
	event.preventDefault();
	textInput = $("#city-type").val();//.toLowerCase();
	//If retrieved text =LA
	if (textInput === "LA" || textInput === "los angeles" || textInput === "Los Angeles"){
    $('body').attr('class' , 'la');
    }

    else if (textInput === "NY" || textInput === "New York" || textInput === "new york"){
    $('body').attr('class' , 'nyc');
    }

    if (textInput === "SF" || textInput === "San Francisco" || textInput === "san francisco"){
    $('body').attr('class' , 'sf');
    }

    if (textInput === "Sidney" || textInput === "sidney"){
    $('body').attr('class' , 'sidney');
    }

    if (textInput === "Austin" || textInput === "austin"){
    $('body').attr('class' , 'austin');
    }
	}

});
