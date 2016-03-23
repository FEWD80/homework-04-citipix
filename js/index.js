$(function() {


	$('#submit-btn').click(getCitiPix);
	var city = $('#city-type').val();
	// alert('testtop');

		// create function called getCitiPix
	function getCitiPix() {
		var city = $('#city-type').val();
		$.ready();
		event.preventDefault;
				
		conole.log('testing1');

		// Create variable(s) for site
		
		// Get city-type, convert and store in variable

		// Submit button should submit the data and pull up 
		
		// If user inputs(...), then background img should chnage
		// if (true) {}
		
		if (city === 'nyc' || 'new york' || 'ny' || 'big apple') {
			$('body').css('backgroundImage', 'url(../images/nyc.jpg)') ;

		} else if (city === 'sf' || 'san francisco'|| 'bay area') {
			$('body').css('backgroundImage', 'url(images/sf.jpg)');

		} else if (city === 'la' || 'lax' || 'los angeles' ) {
			$('body').css('backgroundImage', 'url(/images/la.jpg)');
		} else if (city === 'atx' || 'austin') {
			$('body').css('backgroundImage', 'url(images/austin.jpg');
			// else if (city === )
		} else if (city === 'syd' || 'sydney') {
			$('body').css('backgroundImage', 'url(/images/sydney.jpg)');
		} else {
			
		};
	}

	
	
});