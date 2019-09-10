function displayEvents() {

  var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));
  if (storedEvents != null) {
    $('#eventsDisplay').html('');

    for (var i = 0; i < storedEvents.length; i++){
      
    }
  }

}