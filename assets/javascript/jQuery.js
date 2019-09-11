// Sample data from API returns
// Variables are: singleLocation, restaurantCollection, singleConcert, concertPage, metroCode

var singleLocation =
{
  id: 'n73rxa6e6-fTIxQzfv4BuA',
  name: 'Mother’s Bistro & Bar',
  image_url:
    'https://s3-media3.fl.yelpcdn.com/bphoto/sLEpdghl_XDzRYK_TAWWzA/o.jpg',
  categories: 'Breakfast & Brunch',
  rating: 4
}

var singleConcert =
{
  id: 38618759,
  popularity: 0.000003,
  displayName: 'Les Gold at The Blue Room Bar (September 6, 2019)',
  startDate: '2019-09-06',
  startTime: '20:00:00',
  latitude: 45.463528,
  longitude: -122.5793946
}

var metroCode = 12283;

var concertPage =
  [{
    id: 35475459,
    popularity: 0.000037,
    displayName:
      'Lindsay Clark, Saloli, and Becca Schultz at Al\'s Den, McMenamin\'s Crystal Hotel (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.52279,
    longitude: -122.68511
  },
  {
    id: 35977419,
    popularity: 0.170014,
    displayName:
      'Iron Maiden and The Iron Maidens at Moda Center (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:30:00',
    latitude: 45.53186,
    longitude: -122.66682
  },
  {
    id: 37682214,
    popularity: 0.030166,
    displayName: 'Car Seat Headrest at Oregon Zoo (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.51036,
    longitude: -122.71564
  },
  {
    id: 37776624,
    popularity: 0.29338,
    displayName:
      'Death Cab for Cutie at Oregon Zoo Amphitheatre (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.51027,
    longitude: -122.7157
  },
  {
    id: 38143879,
    popularity: 0,
    displayName: 'edad del pavo at East Creative (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '18:00:00',
    latitude: 45.51315,
    longitude: -122.66351
  },
  {
    id: 38583689,
    popularity: 0.008096,
    displayName: 'scarlxrd at Hawthorne Theatre (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '20:00:00',
    latitude: 45.51187,
    longitude: -122.62298
  },
  {
    id: 38618759,
    popularity: 0.000003,
    displayName: 'Les Gold at The Blue Room Bar (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '20:00:00',
    latitude: 45.46353,
    longitude: -122.57939
  },
  {
    id: 38746949,
    popularity: 0.000971,
    displayName:
      'Willy Porter with Caroline Aiken at Alberta Rose Theatre (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '20:00:00',
    latitude: 45.55895,
    longitude: -122.63475
  },
  {
    id: 38951138,
    popularity: 0.000251,
    displayName:
      'Blair Crimmins and the Hookers at White Eagle Saloon (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:00:00',
    latitude: 45.54079,
    longitude: -122.67545
  },
  {
    id: 38962278,
    popularity: 0.064381,
    displayName: 'Big Boi at Roseland Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:00:00',
    latitude: 45.52331,
    longitude: -122.67644
  },
  {
    id: 38963099,
    popularity: 0.00165,
    displayName: 'Clinton Fearon at Jack London Revue (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:15:00',
    latitude: 45.51945,
    longitude: -122.67629
  },
  {
    id: 38971197,
    popularity: 0.000089,
    displayName: 'A-WA (IL) at Aladdin Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.5011,
    longitude: -122.65425
  },
  {
    id: 38998999,
    popularity: 0.000002,
    displayName:
      'Plastic Harmony Band and Half Shadow at Turn Turn Turn (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: null,
    latitude: 45.56256,
    longitude: -122.66672
  },
  {
    id: 39008502,
    popularity: 0.00589,
    displayName:
      'Sonny & The Sunsets with The Gonks and Sun Foot at Mississippi Studios (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:00:00',
    latitude: 45.55088,
    longitude: -122.67538
  },
  {
    id: 39012601,
    popularity: 0.000014,
    displayName:
      'The Brankas and On Drugs (PDX) at Puppy Manor (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: null,
    latitude: null,
    longitude: null
  },
  {
    id: 39021584,
    popularity: 0.000028,
    displayName:
      'Out of System Transfer with Beggars Canyon, The Tankerays, Fake News, and 1 more… at Twilight Cafe & Bar (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: null,
    latitude: 45.50015,
    longitude: -122.65108
  },
  {
    id: 39023253,
    popularity: 0.003219,
    displayName: 'Sunsquabi at Doug Fir Lounge (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.52292,
    longitude: -122.65871
  },
  {
    id: 39034257,
    popularity: 0.033351,
    displayName: 'Ugly God at Paris Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '19:00:00',
    latitude: 45.52287,
    longitude: -122.67293
  },
  {
    id: 39036567,
    popularity: 0.000182,
    displayName: 'Bumps at New Paris Theatre (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '20:00:00',
    latitude: 45.51696,
    longitude: -122.67329
  },
  {
    id: 39047498,
    popularity: 0.001094,
    displayName: 'Cooper at Star Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:00:00',
    latitude: 45.52335,
    longitude: -122.67659
  },
  {
    id: 39047499,
    popularity: 0.001094,
    displayName: 'Cooper at Star Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '21:00:00',
    latitude: 45.52335,
    longitude: -122.67659
  },
  {
    id: 39053866,
    popularity: 0.000001,
    displayName: 'Trinity Soundz at Star Theater (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '17:00:00',
    latitude: 45.52335,
    longitude: -122.67659
  },
  {
    id: 39053952,
    popularity: 0.001674,
    displayName:
      'Champagne Drip and LUZCID with TVBOO at 45 East (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '22:00:00',
    latitude: 45.52051,
    longitude: -122.66309
  },
  {
    id: 39061152,
    popularity: 0.000055,
    displayName: 'Teddy Presberg at Unknown venue (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: '20:00:00',
    latitude: 45.52306,
    longitude: -122.67648
  },
  {
    id: 39065003,
    popularity: 0.000001,
    displayName: 'Arbor Daze at Ascendant Brewing (September 6, 2019)',
    startDate: '2019-09-06',
    startTime: null,
    latitude: null,
    longitude: null
  }];

var restaurantCollection =
  [{
    id: 'n73rxa6e6-fTIxQzfv4BuA',
    name: 'Mother’s Bistro & Bar',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/sLEpdghl_XDzRYK_TAWWzA/o.jpg',
    categories: 'Breakfast & Brunch',
    rating: 4
  },
  {
    id: 'FBQp3R_PQIM9eGnkqzmlOw',
    name: 'Tasty n Alder',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/My_1QanFXN4LInD4qN4wOg/o.jpg',
    categories: 'American (New)',
    rating: 4.5
  },
  {
    id: 'LF0EuyDA4-rhb6s36q0wsQ',
    name: 'Andina Restaurant',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/Ij9yv97Ch6NwKhNdpezRhw/o.jpg',
    categories: 'Wine Bars',
    rating: 4.5
  },
  {
    id: '4CxF8c3MB7VAdY8zFb2cZQ',
    name: 'Voodo Doughnut - Old Town',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/SYN0So-WNSzWLJSflS4Bfw/o.jpg',
    categories: 'Donuts',
    rating: 3.5
  },
  {
    id: 'H_RM2u1WWGU1HkKZrYq2Ow',
    name: 'Blue Star Donuts',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/uwhAnJYbeZZP9z_PxVdFkg/o.jpg',
    categories: 'Donuts',
    rating: 4
  },
  {
    id: 'qeuJgUdcmL5yAweOsMm6rA',
    name: 'Deschutes Brewery Portland Public House',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/Sv0xPj9DZgBJVGKMfloQlQ/o.jpg',
    categories: 'Brewpubs',
    rating: 4
  },
  {
    id: '0jlUpkdXg3LCE44UKKhjqA',
    name: 'Portland City Grill',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/pamrPZVIJuIhiRhOSZMH6g/o.jpg',
    categories: 'American (New)',
    rating: 4
  },
  {
    id: 'eUbq0uNxRlXQ6sy7phM7yA',
    name: 'Lechon',
    image_url:
      'https://s3-media4.fl.yelpcdn.com/bphoto/wxLJSjqdB0v3wZSRqyNweg/o.jpg',
    categories: 'Argentine',
    rating: 4.5
  },
  {
    id: 'Ys42wLKqrflqmtqkgqOXgA',
    name: 'Lúc Lác',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/9m-lciDcKbAOAvhh0uWAvw/o.jpg',
    categories: 'Vietnamese',
    rating: 4
  },
  {
    id: 'fP45Ns78xlfeAs2ouHklOg',
    name: 'Cheryl’s on 12th',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/hYizpMZ--Q-cdIz-r4HWYw/o.jpg',
    categories: 'Delis',
    rating: 4.5
  },
  {
    id: 'o_L9Ss4boqq6ZEF9xeSH6Q',
    name: 'Salt & Straw',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/OsYtyhQW1K7TuL49IHqzng/o.jpg',
    categories: 'Ice Cream & Frozen Yogurt',
    rating: 4.5
  },
  {
    id: 'GrD-6IvFYMNdAGyFC_hXwA',
    name: 'Little Bird Bistro',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/PgsNwZgoFzJhQUc6fQ0iOQ/o.jpg',
    categories: 'French',
    rating: 4
  },
  {
    id: 'V-5Hnkbqj4h1eMmFwiUeYA',
    name: 'Ground Kontrol Classic Arcade',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/oU5nd95LfA3okpd9J_uPWg/o.jpg',
    categories: 'Bars',
    rating: 4
  },
  {
    id: 'UAido61OqOmR4P7zQB-Duw',
    name: 'Grassa',
    image_url:
      'https://s3-media1.fl.yelpcdn.com/bphoto/61QFNz9NPD9gePe3wkgVJg/o.jpg',
    categories: 'Italian',
    rating: 4
  },
  {
    id: 'YaUGYnfBjq1V-sI0BSokSQ',
    name: 'Ovation Coffee & Tea',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/TmgO-Db06XaWze9irs92IA/o.jpg',
    categories: 'Breakfast & Brunch',
    rating: 5
  },
  {
    id: '6VhcvzGrfYYSygc9UKYfQw',
    name: 'Nong\'s Khao Man Gai',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/jtp9n8HTjid4lEeXlcKKiA/o.jpg',
    categories: 'Thai',
    rating: 4.5
  },
  {
    id: 'u2bjOL1sLW7zXAaXgTVQpg',
    name: 'Bailey\'s Taproom',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/YNs7lohbRp-rlaolEEQbYg/o.jpg',
    categories: 'Beer Bar',
    rating: 4.5
  },
  {
    id: '3KJ-vK3xNUALksxjOrVPQQ',
    name: 'Stumptown Coffee Roasters',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/NnSZ7-R3PW3V_jAx8MuAmA/o.jpg',
    categories: 'Coffee & Tea',
    rating: 4
  },
  {
    id: 'cvLkq3hxRKH--995r1gv4A',
    name: 'Mediterranean Exploration Company',
    image_url:
      'https://s3-media2.fl.yelpcdn.com/bphoto/oJoS0MqCn8u1CJuxrYsCyQ/o.jpg',
    categories: 'Mediterranean',
    rating: 4.5
  },
  {
    id: 'leU9-Kd1HdcICWHlmfLb8Q',
    name: 'Lardo',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/b0E-cDYYiWuvBxFH-YPONA/o.jpg',
    categories: 'Sandwiches',
    rating: 4
  }];

/////////////////////////////////////////////////////////////////////////////////////////////

// Variables are: singleLocation, restaurantCollection, singleConcert, concertPage, metroCode

// Search functions
function searchConcerts() {
  var cityInput = $('#cityInput').val();
  var eventName = $('#eventName').val();
  var startDateRaw = $('#startDate').val();
  var endDateRaw = $('endDate').val();

  var startDate = moment(startDateRaw).format("YYYY-MM-DD");
  var endDate = moment(endDateRaw).format("YYYY-MM-DD");

  console.log("This will be sent to getSongkickLocation: " + cityInput);
  console.log("This will be sent to getSongkickShows: ");
  console.log("City Code Provided by the return function");
  console.log("Event Name: " + eventName);
  console.log(startDate);
  console.log(endDate);

  alert(startDate);
  alert(endDate);

}

$('#searchSubmitButton').on('click', function (event) {
  event.preventDefault();
  searchConcerts();
});




// Display functions
function populateForm() {
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

    $('#eventCard').append($newRow);
  }
}

// $(document).ready(function(){
  populateForm();

  var concertId = concertPage[0].id;
  var latitude = concertPage[0].latitude;
  var longitude = concertPage[0].longitude;

  var $button = $('<button type="button" class="btn btn-primary btn-sm concertDetails">Details</button>');
  $button.attr('id', concertId);
  $button.attr('data-latitude', latitude);
  $button.attr('data-longitude', longitude);



$('body').on('click', 'button.btn.btn-primary.btn-sm.concertDetails', function(){
  console.log("Id sent to function: " + $(this).attr('id'));
  console.log("Longitude: " + $(this).attr('data-longitude'));
  console.log("Latitude: " + $(this).attr('data-latitude'));
})


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