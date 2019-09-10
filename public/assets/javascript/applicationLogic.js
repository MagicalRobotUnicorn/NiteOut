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

function confirmPlans(eventDetails, restaurantDetails){
  var $newDiv = $('<div class="container confirmPlansContainer">');
  
  $newDiv.append('Great! So you are going to see: ' + eventDetails.displayName);
  $newDiv.append('And then you are going to ' + restaurantDetails.name);

  var $button = $('<button type="button" class="btn btn-primary btn-sm confirmPlansButton">Confirm</button>');
  $button.attr('data-concertId', eventDetails.id);
  $button.attr('data-restaurantId', restaurantDetails.id);

  $newDiv.append($button);

  $('#confirmPlans').append($newDiv);

}

// On back, call the metroId again

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

// On back, call the concert Id and get the restaurants

$('body').on('click', 'button.btn.btn-primary.btn-sm.restaurantSelect', function(){
  var concertId = $(this).attr('data-concertId');
  var restaurantId = $(this).attr('data-restaurantId');
  var eventDetails;
  var restaurantDetails;

  var queryURL = './api/eventdetails?idNumber=' + concertId;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response){
    eventDetails = response;

    var secondQuery = './api/restaurantdetails?idNumber=' + restaurantId;
    $.ajax({
      url: secondQuery,
      method: 'GET'
    }).then(function(response){
      restaurantDetails = response;
      confirmPlans(eventDetails, restaurantDetails);
  });
  
});
});

$('body').on('click', 'button.btn.btn-primary.btn-sm.confirmPlansButton', function(){
  var concertId = $(this).attr('data-concertId');
  var restaurantId = $(this).attr('data-restaurantId');
  var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

  var plansObject = {};
  plansObject.concertId = concertId;
  plansObject.restaurantId = restaurantId;

  if (storedEvents === null) {
    storedEvents = [];
  }

  storedEvents.push(plansObject);

  localStorage.setItem("storedEvents", JSON.stringify(storedEvents));
  alert("Event Saved");
});




/*
  Firebase: tracking searches, user authorization

  
*/

