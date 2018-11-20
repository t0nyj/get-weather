const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);
  request({
    url: 'http://open.mapquestapi.com/geocoding/v1/address?key=dKKFVh5jfBZnGhydfE4jDr7gTHGjbWWz&location='+ encodeAddress,
    json: true
  },(error,response,body) => {
    if(error){
      callback('Unable to connect to server..');
    }
    else {
      callback(undefined, {
        address: `${body.results[0].locations[0].adminArea5}, ${body.results[0].locations[0].adminArea3}, ${body.results[0].locations[0].adminArea1}`,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    }

  })
};

module.exports = {
  geocodeAddress
};
