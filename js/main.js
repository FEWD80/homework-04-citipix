
$(function(){

  var city=""; 
  

  //1. Fetch for City (String) and store it in a variable 

  $('#city-type').keyup(function(event){
    var tag = $('#city-type').val();
    // console.log('new city ' + tag);
    // console.log('key-lenght: '+event.which);


    var letters=event.which;

    // console.log('letters: ' + letters); 

    //2. Convert string to lowercase
    var lcNewCity= tag.toLocaleLowerCase();

    city=city + lcNewCity;

    // console.log('city:' + city);

  

    if (letters!==8)
    {

      // console.log('success');

      changeBackground();


    } else{

      $('body').attr('class', 'default');

      city = '';

    } 


  })



  //4. Listen for a click event for city choice


  $('#submit-btn').click(UpdateCity);

  function UpdateCity(event)
  {

    //5. Prevent a form submission

    event.preventDefault();

    //6. Set default Background Image and empty variable


    $('body').attr('class', 'default');

    city = '';
    
    //7. Clear Text Field and variable

    $('#city-type').val('');


    // console.log('newtag '+ city);


  };


  //3. Update Background picture according to string

  function changeBackground()
  {


    if (!city || city.length < 1)
    {
      $('body').attr('class', 'default');

    } else if (city==="n" || city==="ny" || city==="nyc")
    {
      $('body').attr('class', 'nyc');
      city = '';

    } else if (city==="s" || city==="sf") 
    {
      $('body').attr('class', 'sf');
      city = '';

    } else if (city==="l" || city==="la" | city==="lax") 
    {
      $('body').attr('class', 'la');
      city = '';

    } else if (city==="a" || city==="at" || city==="atx") 
    {
      $('body').attr('class', 'austin');
      city = '';

    } else if (city==="s" || city==="sy" || city==="syd") 
    {
      $('body').attr('class', 'sydney');
      city = '';

    } else{

    $('body').attr('class', 'default');

    }

  };



});