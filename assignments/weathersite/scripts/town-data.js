var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    populateData(townData);
}

function populateData(jsonObj) {
    var towns = jsonObj["towns"];
    
    var townName = document.getElementById("town-name-1");
    townName.textContent = towns[0].name;
    var townName = document.getElementById("town-name-2");
    townName.textContent = towns[1].name;
    var townName = document.getElementById("town-name-3");
    townName.textContent = towns[3].name;
    
    var motto = document.getElementById("motto-1");
    motto.textContent = towns[0].motto;
    var motto = document.getElementById("motto-2");
    motto.textContent = towns[1].motto;
    var motto = document.getElementById("motto-3");
    motto.textContent = towns[3].motto;
    
    var founded = document.getElementById("founded-1");
    founded.textContent = towns[0].yearFounded;
    var founded = document.getElementById("founded-2");
    founded.textContent = towns[1].yearFounded;
    var founded = document.getElementById("founded-3");
    founded.textContent = towns[3].yearFounded;
    
    var population = document.getElementById("pop-1");
    population.textContent = towns[0].currentPopulation;
    var population = document.getElementById("pop-2");
    population.textContent = towns[1].currentPopulation;
    var population = document.getElementById("pop-3");
    population.textContent = towns[3].currentPopulation;

    var rain = document.getElementById("rain-1");
    rain.textContent = towns[0].averageRainfall;
    var rain = document.getElementById("rain-2");
    rain.textContent = towns[1].averageRainfall;
    var rain = document.getElementById("rain-3");
    rain.textContent = towns[3].averageRainfall;

    
    var townEvents1 = towns[0].events;
    var events1 = document.getElementById("events-1");
    for (var j = 0; j < townEvents1.length; j++) {
        events1.textContent += townEvents1[j] + '; ';
    }
    var townEvents2 = towns[1].events;
    var events2 = document.getElementById("events-2");
    for (var j = 0; j < townEvents2.length; j++) {
        events2.textContent += townEvents2[j] + '; ';
    }
    var townEvents3 = towns[3].events;
    var events3 = document.getElementById("events-3");
    for (var j = 0; j < townEvents3.length; j++) {
        events3.textContent += townEvents3[j] + '; ';
    }

}