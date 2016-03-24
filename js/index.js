$(function() {


	
	$('#submit-btn').click(getCitiPix);
	var city;
	// alert('testtop');
	// event.preventDefault();	

		// create function called getCitiPix
	function getCitiPix(event) {
		// event.preventDefault();	
		var city = $('#city-type').val();
		event.preventDefault();	
	

		// Create variable(s) for site
		// Get city-type, convert and store in variable
		// Submit button should submit the data and pull up 
		// If user inputs(...), then background img should chnage
		// if (true) {}
// New York City	
		if (city === 'nyc' || city ==='NYC' || city === 'New York City'|| 
			city === 'new york city'|| city === 'new york' || city ==='New York'|| 
			city === 'ny' || city ==='NY'|| city === 'big apple') {
			$('body').css('backgroundImage', 'url(images/nyc.jpg)');
			// console.log('am I here?');


// San Francisco
		} else if (city === 'sf' || city ==='SF' || city ==='San Francisco' || 
			city === 'san francisco'|| city === 'bay area') {
			$('body').css('backgroundImage', 'url(images/sf.jpg)');


// Los Angeles
		} else if (city === 'la' || city === 'LA' || city === 'lax' || city === 'LAX' || 
			city === 'los angeles' || city ==='Los Angeles' ) {
			$('body').css('backgroundImage', 'url(images/la.jpg)');


// Austin
		} else if (city === 'atx' || city === 'ATX' || city === 'austin' || city === 'Austin') {
			$('body').css('backgroundImage', 'url(images/austin.jpg');
		

// Sydney		
		} else if (city === 'syd' || city ==='SYD' || city ==='Sydney' || city === 'sydney') {
			$('body').css('backgroundImage', 'url(images/sydney.jpg)');

// Paris
		} else if (city === 'paris' || city === 'Paris' ) {
			$('body').css('backgroundImage', 'url(images/paris.jpg)');

// Rome			
		} else if (city === 'rome' || city ==='Rome') {
			$('body').css('backgroundImage', 'url(images/rome.jpg)');

// Dubai
		} else if (city === 'dubai' || city === 'Dubai') { 
			$('body').css('backgroundImage', 'url(images/dubai.jpg)');

// Barcelona
		} else if (city === 'barcelona' || city ==='Barcelona' || city === 'barca') { 
			$('body').css('backgroundImage', 'url(images/barcelona.jpg)');


		} else  { $('body').css('backgroundImage', 'url(images/citipix_skyline.jpg)');
			// pop-up alert if the city user searched for is not available
			alert('Sorry, your city is not available at this moment. Come back soon we are constantly making updates!');
		}
	}	
	
});





