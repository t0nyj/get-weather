const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/9c412100a8a30ea3882c0706d56bd4a0/${lat},${long}`,
    json: true
  },(error,response,body) => {

    if(response.statusCode === 200 && !error){
      callback(undefined, {
        temperature: `${(((body.currently.temperature - 32) * 5 / 9)+1) | 0}C`,
        summary: body.currently.summary
      });
    }
    else{
      callback('Unable to fetch weather');
    }

  });
}

module.exports = {
  getWeather
};
