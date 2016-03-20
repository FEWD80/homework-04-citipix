
// array of objects to store search and class data for loop to look through and take correct course of action
var city = [
  {
    name: 'New York',
    altName0: 'New York City',
    altName1: 'NYC',
    class: 'nyc'
  },
  {
    name: 'San Francisco',
    altName0: 'SF',
    altName1: 'Bay Area',
    class: 'sf'
  },
  {
    name: 'Los Angeles',
    altName0: 'LA',
    altName1: 'LAX',
    class: 'la'
  },
  {
    name: 'Austin',
    altName0: 'ATX',
    altName1: 'austin',
    class: 'austin'
  },
  {
    name: 'Sydney',
    altName0: 'SYD',
    altName1: 'syd',
    class: 'sydney'
  },

];

var userEntry;

$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  // Gathers User entry
  userEntry = $('#city-type').val().toLowerCase();
  console.log(userEntry);
  // loops through data in city obeject array and checks if
  // user entry matches any one of the items in array
  // if so change class to corresponding class
  for (var i = 0; i < city.length; i++) {
    if (userEntry === city[i].name.toLowerCase() || userEntry === city[i].altName0.toLowerCase() || userEntry === city[i].altName1.toLowerCase()) {
      console.log(city[i].class);
      console.log(userEntry);
      $('body').attr('class', city[i].class);
      $('#city-type').val('');
    } else {
      $('#city-type').val('');
    }
  }
}
