const url = require('url');

// Search functions
function searchConcerts() {
  var cityInput = $('#cityInput').val();
  var startDateRaw = $('#startDate').val();
  var endDateRaw = $('#endDate').val();

  var startDate = moment(startDateRaw).format("YYYY-MM-DD");
  var endDate = moment(endDateRaw).format("YYYY-MM-DD");
  
  var returnObject = {};

  returnObject.cityInput = cityInput;
  returnObject.startDate = startDate;
  returnObject.endDate = endDate;

}

$('#searchSubmitButton').on('click', function (event) {
  console.log('inside click event');
  event.preventDefault();
  var query = searchConcerts();
  });