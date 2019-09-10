const apiScript = require('./assets/javascript/apiScripts.js/index.js.js');

var one = apiScript.getSongkickLocation('Portland,OR');

var two = apiScript.getSongkickShows(12283, '2019-09-08', '2019-09-10', 1);

var three = apiScript.getYelpInformation(45.52335, -122.6765);

var four = apiScript.getEventDetails(38618759);

var five = apiScript.getRestaurantDetails('n73rxa6e6-fTIxQzfv4BuA');

console.log(one);
console.log(twp);
console.log(three);
console.log(four);
console.log(five);