document.addEventListener("DOMContentLoaded", function() {

  var pearson = {'lat': 43.6777, 'long': -79.6248}
  var cnTower = {'lat': 43.6426, 'long': -79.3871}


  $.ajax({
    url:       'http://www.scoopfare.com/price/show?sl=' + pearson['lat'] + '&slon=' + pearson['long'] + '&el=' + cnTower['lat'] + '&elon=' + cnTower['long'] + '',
    method:    'GET',
    dataType:  'json'
  }).done( function(responseData) {
    console.log(responseData);
  })

});
