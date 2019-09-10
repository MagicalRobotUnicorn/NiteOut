function displayEvents() {

  var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));
  if (storedEvents != null) {
    $('#eventsDisplay').html('');

    for (var i = 0; i < storedEvents.length; i++) {
      var $newRow = $('<div class="row">');
      var concertId = storedEvents[i].concertId;
      var restaurantId = storedEvent[i].restaurantId;
      var eventDetails;
      var restaurantDetails;

      var queryURL = './api/eventdetails?idNumber=' + concertId;
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).then(function (response) {
        eventDetails = response;

        var secondQuery = './api/restaurantdetails?idNumber=' + restaurantId;
        $.ajax({
          url: secondQuery,
          method: 'GET'
        }).then(function (response) {
          restaurantDetails = response;
          
          var concertDisplay = eventDetails.displayName;
          var restaurantDisplay = restaurantDetails.name;

          var $concertP = $('<p>');
          var $restaurantP = $('<p>');
          $concertP.append(concertDisplay);
          $restaurantP.append(restaurantDisplay);
          $newRow.append($concertP);
          $newRow.append($restaurantP);

          $('#eventsDisplay').append($newRow);
        });

      })
    }
  }
}