document.addEventListener("DOMContentLoaded", function() {

  var uberSection = document.querySelector('.uber');
  var lyftSection = document.querySelector('.lyft');

  var pearson = {'lat': 43.6777, 'long': -79.6248}
  var cnTower = {'lat': 43.6426, 'long': -79.3871}


  $.ajax({
    url:       'http://www.scoopfare.com/price/show?sl=' + pearson['lat'] + '&slon=' + pearson['long'] + '&el=' + cnTower['lat'] + '&elon=' + cnTower['long'] + '',
    method:    'GET',
    dataType:  'json'
  }).done( function(responseData) {
    console.log(responseData);

    for (var i = 0; i < responseData.uber.length; i++) {
      var type      = document.createElement('h2');
      var capacity  = document.createElement('h5');
      var distance  = document.createElement('h5');
      var duration  = document.createElement('h5');
      var eta       = document.createElement('h5');
      var fare      = document.createElement('h5');

      type.innerText     = responseData.uber[i].type
      capacity.innerText = 'Capacity: ' + responseData.uber[i].capacity
      distance.innerText = 'Distance: ' + responseData.uber[i].distance
      duration.innerText = 'Duration: ' + responseData.uber[i].duration
      eta.innerText      = 'ETA: '      + responseData.uber[i].eta
      fare.innerText     = 'Fare: '     + responseData.uber[i].fare

      uberSection.append(type)
      uberSection.append(capacity)
      uberSection.append(distance)
      uberSection.append(duration)
      uberSection.append(eta)
      uberSection.append(fare)
    }

    for (var i = 0; i < responseData.lyft.length; i++) {
      var type      = document.createElement('h2');
      var capacity  = document.createElement('h5');
      var distance  = document.createElement('h5');
      var duration  = document.createElement('h5');
      var eta       = document.createElement('h5');
      var fare      = document.createElement('h5');

      type.innerText     = responseData.lyft[i].type
      capacity.innerText = 'Capacity: ' + responseData.lyft[i].capacity
      distance.innerText = 'Distance: ' + responseData.lyft[i].distance
      duration.innerText = 'Duration: ' + responseData.lyft[i].duration
      eta.innerText      = 'ETA: '      + responseData.lyft[i].eta
      fare.innerText     = 'Fare: '     + responseData.lyft[i].fare

      lyftSection.append(type)
      lyftSection.append(capacity)
      lyftSection.append(distance)
      lyftSection.append(duration)
      lyftSection.append(eta)
      lyftSection.append(fare)
    }

  })

});
