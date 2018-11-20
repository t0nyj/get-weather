const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./forecast/forecast')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather <City> <State> <Country>',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
geocode.geocodeAddress(argv.address, (errorMsg, result) => {
  if(errorMsg){
    console.log(errorMsg);
  } else{
    weather.getWeather(result.latitude, result.longitude, (errorMsg, weatherResult) => {
      if(errorMsg){
        console.log(errorMsg);
      } else{
        console.log(`Weather for ${result.address}`);
        console.log(`Temperature: ${weatherResult.temperature}, Current condition: ${weatherResult.summary}`);
      }
    });
  }
});
