// Sample data from API returns
// Variables are: singleLocation, restaurantCollection, singleConcert, concertPage, metroCode


/////////////////////////////////////////////////////////////////////////////////////////////

// Variables are: singleLocation, restaurantCollection, singleConcert, concertPage, metroCode

// Search functions
function searchConcerts() {
  var cityInput = $('#cityInput').val();
  var eventName = $('#eventName').val();
  var startDateRaw = $('#startDate').val();
  var endDateRaw = $('#endDate').val();

  var startDate = moment(startDateRaw).format("YYYY-MM-DD");
  var endDate = moment(endDateRaw).format("YYYY-MM-DD");

  var queryURL = './api/songkicklocation' + '?cityInput=' + cityInput;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response){
    console.log(response);
    var secondURL = '/api/songkickshows?location=' + response.cityCode + '&min_date=' + startDate + '&max_date=' + endDate + '&page=1';
    $.ajax({
      url: secondURL,
      method: 'GET'
    }).then(function(response) {
      populateForm(response);
    })
  });
}

$('#searchSubmitButton').on('click', function (event) {
  event.preventDefault();
  searchConcerts();
});




// Display functions
function populateForm(concertPage) {
  for (var i = 0; i < concertPage.length; i++) {
    var $firstCol = $('<div class="col-6-sm">');
    var $secondCol = $('<div class="col-6-sm">');
    
    var displayName = concertPage[i].displayName;
    var concertId = concertPage[i].id;
    var latitude = concertPage[i].latitude;
    var longitude = concertPage[i].longitude;

    var $button = $('<button type="button" class="btn btn-primary btn-sm concertDetails">Details</button>');
    $button.attr('id', concertId);
    $button.attr('data-latitude', latitude);
    $button.attr('data-longitude', longitude);

    var $newRow = $('<tr>');
    var $concertCell = $('<tr>');

    $firstCol.append(displayName);
    $secondCol.append($button);

    $newRow.append('<td>' + displayName + '</td>');
    $concertCell.html($button);
    $newRow.append($concertCell);

    $('#tableBody').append($newRow);
  }
}



  // var concertId = concertPage[0].id;
  // var latitude = concertPage[0].latitude;
  // var longitude = concertPage[0].longitude;

  // var $button = $('<button type="button" class="btn btn-primary btn-sm concertDetails">Details</button>');
  // $button.attr('id', concertId);
  // $button.attr('data-latitude', latitude);
  // $button.attr('data-longitude', longitude);


function populateRestaurants(response, idNumber){
  console.log(response);

  var $allRestaurants = $('<div>');
  for (var i = 0; i < response.length; i++){
    var $newDiv = $('<div class="eachRestaurant container">');
    var $pictureDiv = $('<div class="col-4">');
    $pictureDiv.append('<img src="' + response[i].image_url + '" class="restaurantImage">');
    var $infoDiv = $('<div class="col-8">');
    $infoDiv.append('<h2 class="restaurantName">' + response[i].name + '</h2>');
    $infoDiv.append('<h2 class="restaurantCategory">' + response[i].categories + '</h2>');
    $infoDiv.append('<h2 class="restaurantRating">' + response[i].rating + '</h2>');

    var $button = $('<button type="button" class="btn btn-primary btn-sm restaurantSelect">Select</button>');
    $button.attr('data-concertId', idNumber);
    $button.attr('data-restaurantId', response[i].id);

    $infoDiv.append($button);
    $newDiv.append($pictureDiv);
    $newDiv.append($infoDiv);
    $newDiv.append($button);

    $allRestaurants.append($newDiv);
  }
  $('#restaurantResults').append($allRestaurants);
}

$('body').on('click', 'button.btn.btn-primary.btn-sm.concertDetails', function(){

  var idNumber = $(this).attr('id');
  var longitude = $(this).attr('data-longitude');
  var latitude = $(this).attr('data-latitude');

  var queryURL = './api/songkicklocation' + '?cityInput=' + cityInput;

  var queryURL = './api/yelpinformation' + '?latitude=' +latitude + "&longitude=" + longitude;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response){
    populateRestaurants(response, idNumber);
  });
});


// Both the restaurants and the clubs are organized into collections of 25

// Display all events
// Using the prototype of the train schedule from class

// Display single event
// Header -> Event (RSVP Button)
// Body -> Make divs

// Display single bar
// Diplay Event and Bar Together -> Confirm Plans thing

//////////////////////////////////////////////////////////////

/*

Event reply:
{ id: 39043525,
    popularity: 0.000008,
    displayName:
     'Strange and the Familiars at Alberta Street Pub (September 9, 2019)',
    startDate: '2019-09-09',
    startTime: '18:00:00',
    latitude: 45.55893,
    longitude: -122.65483 }

  Display individual page: call to songkick api on event id:

  Display each restaurant individually ->
    * Each SW Card is representative of one restaurant

  card id="response[i]"
  img src="response[i].image_url"
  text:
    response[i].name
    response[i].category
    response[i].rating
      * rating uses the yelp assets
*/

/*
  Local Storage -> The user's individual concerts...

  Date Object ->
  Name as string
  Id of concert
  Name of restaurant
  Id of restaurant

  Confirm Event Page -> Attribute to Database
*/

/*
  Firebase: tracking searches, user authorization

  
*/

/*
  Sample site layout:
  In sampleSearch:
    tabs for:
      *search by concert
      *search by city
  In sample display:
    Output is displayed in table
    One line per event
    Button for select -> goes to sampleDisplay
  In sample display:
    Show information
    Nearby restaurants
*/