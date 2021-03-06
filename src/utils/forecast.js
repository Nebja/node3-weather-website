const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=4f373911756e5f021f3d31e2299932c8&query='+latitude+','+longitude;
    request({ url, json: true }, (error, { body } = {}) => {
        if (error){
            callback('Unable to connect to weather services', undefined)
        }else if(body.error === 615){
            callback('Unable to find location. Try another search.', undefined)
        }else {
            callback(undefined , body.current.weather_descriptions[0]+". It is currently "+body.current.temperature+" degress out.\nThere is a "+body.current.precip+"% chance of rain.")
        }
    })
}

module.exports = forecast