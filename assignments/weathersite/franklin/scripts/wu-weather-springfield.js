var requestURL = "https://api.wunderground.com/api/81f03fdc1644562c/conditions/q/MO/Springfield.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function () {
    var weatherInfo = JSON.parse(request.responseText);
    console.log(weatherInfo);

    document.getElementById('high').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('current-conditions').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById("current-icon").src = weatherInfo.current_observation.icon_url;
    document.getElementById('forecast').innerHTML = weatherInfo.current_observation.forecast_url;
}