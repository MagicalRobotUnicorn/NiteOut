// const url = require('url');

http://localhost:5000/public/sampleDisplay.html?cityInput=Portland%2C+OR&startDate=2019-09-17&endDate=2019-09-18;



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

    $('#tableBody').append($newRow);
  }
}


$(document).ready(function(){

  console.log(window.location.href);

  
  }
  



);
