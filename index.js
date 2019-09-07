const http = require('http');
const path = require('path');
const fs = require('fs');
const apiCalls = require('./assets/javascript/apiScripts');

// We need to create the routing urls for each of the responses
// The calls to the API's are going to be in the format of 'application/json'
// We are then calling the AJAX function from within our code to get our response


const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  // The api calls
  // Get Event Details
  // Get Restaurant Details
  // getSongkicklocation
  // getSongkickShows
  // getYelpInformation
   // if (req.url === '/api/users') {
  //   const users = [
  //     {name: 'Bob Smith', age: '20'},
  //     {name: 'Jay Smith', age: '25'}
  //   ]


  var searchParams = req.searchParams;
  var pathName = req.pathname;
  

  if (pathName === '/api/eventdetails') {
    
    
  }
  if (pathName === '/api/restaurantdetails') {

  }
  if (pathName === '/api/songkicklocation') {
    var city = searchParams.cityInput
    var code = apiCalls.getSongkickLocation(city);
    return code;
  }

  if (pathName === '/api/songkickshows') {

  }
  if (pathName === '/api/yelpinformation') {

  }

  if (req.url === './sampleHTML/sampleDisplay.html'){

  }

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? './sampleHTML/sampleSearch.html' : './sampleHTML/' + req.url );

  console.log(filePath);

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

  // Returning AJAX from 
  // Read file
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
      // Successful
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(content, 'utf8');
    }
  }
)
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

