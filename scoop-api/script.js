document.addEventListener("DOMContentLoaded", function() {

  // var pearsonLat =

  $.ajax({
    url:       'http://www.scoopfare.com/price/show?sl=43.6777&slon=-79.6248&el=43.6426&elon=-79.3871',
    method:    'GET',
    dataType:  'json'
  }).done( function(responseData) {
    console.log(responseData);
  })

});
