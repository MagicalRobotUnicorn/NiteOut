const apiScript = require('./apiScripts.js');

async function thing1(){
  var thing2 = await (apiScript.getSongkickLocation('Portland,OR'));

  return thing2;
}

thing1().then((results) => {
  console.log(results);
});

// var promise1 = new Promise(function(resolve, reject) {
//   resolve(apiScript.getSongkickLocation('Portland,OR'));
// });

// promise1.then(function(value){
//   console.log(value);
// });


// apiScript.getSongkickShows(12283, '2019-09-08', '2019-09-10', 1);

// apiScript.getYelpInformation(45.52335, -122.6765);

// apiScript.getEventDetails(38618759);

// apiScript.getRestaurantDetails('n73rxa6e6-fTIxQzfv4BuA');

