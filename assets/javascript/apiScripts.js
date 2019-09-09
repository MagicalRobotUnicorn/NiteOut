let fetch = require('node-fetch');

function getSongkickLocation(query) {
  // Switch statement based on query information passed to function
  var queryURL = 'https://api.songkick.com/api/3.0/search/locations.json?apikey=NBBXfIsma0WxaO7n&query=' + query;

  fetch(queryURL).then(response => {
    response.json().then(function (json) {
      return json.resultsPage.results.location[0].metroArea.id;
    });
  });
}

function getSongkickShows(location, min_date, max_date, page) {
  if (min_date != '') {
    var startDate = '&min_date=' + min_date;
  }
  if (max_date != '') {
    var endDate = '&max_date=' + max_date;
  }
  var queryURL = 'https://api.songkick.com/api/3.0/metro_areas/12283/calendar.json?apikey=NBBXfIsma0WxaO7n' + startDate + endDate + '&page=' + page + '&per_page=25';

  fetch(queryURL).then(response => {
    response.json().then(function (response) {
      var responseArray = [];

      for (var i = 0; i < response.resultsPage.results.event.length; i++) {
        var individualEvent = response.resultsPage.results.event[i];
        var individualResponse = {};

        // Primary Key
        individualResponse.id = individualEvent.id;

        // Event popularity
        individualResponse.popularity = individualEvent.popularity;
        // Event Name
        individualResponse.displayName = individualEvent.displayName;
        // Event Date
        individualResponse.startDate = individualEvent.start.date;
        // Event Time
        individualResponse.startTime = individualEvent.start.time;
        // Location
        individualResponse.latitude = individualEvent.venue.lat;
        individualResponse.longitude = individualEvent.venue.lng;
        responseArray.push(individualResponse);
      }
      return responseArray;
    });
  });
}


function getYelpInformation(latitude, longitude) {
  var queryURL = 'https://api.yelp.com/v3/businesses/search?latitude=' + latitude + '&longitude=' + longitude;

  var myHeaders = [];

  fetch(queryURL, {
    headers: {
      Accept: 'application/json',
      Authorization: 'bearer fPHJlT9V-VdXW7R2Tb4fViB-fynuvorWm-hy9usb8DfqWyk_EiDtV1-oANH7lwaAKjyisudQak2FRMDGp_tWbIRQER3iE1w-iTmIBAgb7bRA10RU5Ou4S8jh1PdlXXYx',
    }, credentials: 'same-origin'
  }).then(response => {
    response.json().then(function (response) {
      var responseArray = [];

      for (var i = 0; i < response.businesses.length; i++) {
        var individualRestaurant = response.businesses[i];
        var individualResponse = {};

        individualResponse.id = individualRestaurant.id;
        individualResponse.name = individualRestaurant.name;
        individualResponse.image_url = individualRestaurant.image_url;

        individualResponse.categories = individualRestaurant.categories[0].title;

        individualResponse.rating = individualRestaurant.rating;

        responseArray.push(individualResponse);
      }
      return responseArray;
    });
  });
}

function getEventDetails(idNumber) {
  var queryURL = 'https://api.songkick.com/api/3.0/events/' + idNumber + '.json?apikey=NBBXfIsma0WxaO7n';

  fetch(queryURL).then(response => {
    response.json().then(response => {
      var individualEvent = response.resultsPage.results.event;
      var individualResponse = {};

      // Primary Key
      individualResponse.id = individualEvent.id;

      // Event popularity
      individualResponse.popularity = individualEvent.popularity;
      // Event Name
      individualResponse.displayName = individualEvent.displayName;
      // Event Date
      individualResponse.startDate = individualEvent.start.date;
      // Event Time
      individualResponse.startTime = individualEvent.start.time;
      // Location
      individualResponse.latitude = individualEvent.venue.lat;
      individualResponse.longitude = individualEvent.venue.lng;

      return individualResponse;
    });
  }

  )
}

function getRestaurantDetails(idNumber) {

  var queryURL = 'https://api.yelp.com/v3/businesses/' + idNumber;
  console.log(queryURL);

  fetch(queryURL, {
    headers: {
      Accept: 'application/json',
      Authorization: 'bearer fPHJlT9V-VdXW7R2Tb4fViB-fynuvorWm-hy9usb8DfqWyk_EiDtV1-oANH7lwaAKjyisudQak2FRMDGp_tWbIRQER3iE1w-iTmIBAgb7bRA10RU5Ou4S8jh1PdlXXYx',
    }, credentials: 'same-origin'
  }).then(response => {
    response.json().then(function (response) {
      var individualResponse = {};

      individualResponse.id = response.id;
      individualResponse.name = response.name;
      individualResponse.image_url = response.image_url;

      individualResponse.categories = response.categories[0].title;

      individualResponse.rating = response.rating;

      return individualResponse;
    });
  }
  )
}

module.exports = { getSongkickLocation: getSongkickLocation, getSongkickShows: getSongkickShows, getEventDetails: getEventDetails, getYelpInformation: getYelpInformation, getRestaurantDetails: getRestaurantDetails }