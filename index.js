const http = require('http');
const path = require('path');
const fetch = require('node-fetch')
const fs = require('fs');
const url = require('url');
const apiCalls = require('./assets/javascript/apiScripts');

// We need to create the routing urls for each of the responses
// The calls to the API's are going to be in the format of 'application/json'
// We are then calling the AJAX function from within our code to get our response


const server = http.createServer((req, res) => {
  const headers = {

    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  };


  var pathName = req.url.split("?");
  console.log(pathName[0], pathName[1]);
  var parametersObject = {};

  if (!pathName[1]) {
    pathName = pathName[0];
  }
  else {

    var parameters = pathName[1].split('&');

    for (var i = 0; i < parameters.length; i++) {
      var individualParameter = parameters[i].split('=');
      parametersObject[individualParameter[0]] = individualParameter[1];
    }

    pathName = pathName[0];
    console.log(parametersObject);

  }

  if (pathName === '/api/songkicklocation') {
    console.log('Accessed');
    var city = parametersObject.cityInput;
    var queryURL = 'https://api.songkick.com/api/3.0/search/locations.json?apikey=NBBXfIsma0WxaO7n&query=' + city;
    fetch(queryURL).then(response => {
      response.json().then(function (json) {
        var content = ((json.resultsPage.results.location[0].metroArea.id));
        console.log(content);
        var returnObject = {};
        var returnArray = []
        returnObject.cityCode = content;

        console.log(returnObject);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(returnObject));
      });
    });
  }

  else if (pathName === '/api/eventdetails') {
    var idNumber = parametersObject.idNumber;
    var queryURL = 'https://api.songkick.com/api/3.0/events/' + idNumber + '.json?apikey=NBBXfIsma0WxaO7n';

    fetch(queryURL).then(response => {
      response.json().then(response => {
        console.log('gotHere');
        console.log(response);
        console.log(response.resultsPage.results.event)
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

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(individualResponse));

      })
    });
  }

    else if (pathName === '/api/songkickshows') {
      var location = parametersObject.location;
      var min_date = parametersObject.min_date;
      var max_date = parametersObject.max_date;
      var page = parametersObject.page;

      if (min_date != '') {
         var startDate = '&min_date=' + min_date;
       }
       if (max_date != '') {
      var endDate = '&max_date=' + max_date;
      }
      var queryURL = 'https://api.songkick.com/api/3.0/metro_areas/' + location + '/calendar.json?apikey=NBBXfIsma0WxaO7n' + startDate + endDate + '&page=' + page + '&per_page=25';

      console.log(queryURL);
      fetch(queryURL).then(response => {
        response.json().then(function (response) {
          var responseArray = [];
          console.log(response);

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

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(responseArray));
        });
      });
    }
  

  else if (pathName === '/api/yelpinformation') {
    var latitude = parametersObject.latitude;
    var longitude = parametersObject.longitude;
    var queryURL = 'https://api.yelp.com/v3/businesses/search?latitude=' + latitude + '&longitude=' + longitude;
    
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
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(responseArray));
        });
      });
    }

    else if (pathName === '/api/restaurantdetails') {
      console.log('Accessed');
      var idNumber = parametersObject.idNumber;
      var queryURL = 'https://api.yelp.com/v3/businesses/' + idNumber;
  
  
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
  
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(individualResponse));
        });
      });
    }

  else {
  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? '/sampleHTML/sampleSearch.html' : req.url);
  // if (req.url === '/') {
  //   filePath = path.join(__dirname, 'public', 'sampleHTML')
  // }

  // Extension of the file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        })
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`)
      }
    } else {
      console.log(content);
      res.writeHead(200, {'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
}
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

