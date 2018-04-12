var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
    
    var y = document.getElementsByClassName("sliderImage");
    if (n > y.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"; 
    }
    y[slideIndex-1].style.display = "block"; 
}

function expand1() {
    $("#bike1").toggleClass("invisible");
    $("#bike1-div").toggleClass("move-down");
    $("#bike1-div").toggleClass("expand");
}

function expand2() {
    $("#bike2").toggleClass("invisible");
    $("#bike2-div").toggleClass("move-down");
    $("#bike2-div").toggleClass("expand");
}

function expand3() {
    $("#bike3").toggleClass("invisible");
    $("#bike3-div").toggleClass("move-down");
    $("#bike3-div").toggleClass("expand");
}

function thankYou() {
    $("#thankyou").removeClass("hidden");
    $("#submission").addClass("hidden");
}

//-----------json-----------//

var table = document.querySelector("table");

var requestURL = "https://ethanrusson.github.io/mountain-spoke/data/repairs.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var repairData = request.response;
    populateData(repairData);
}

function populateData(jsonObj) {
    
    var repairs = jsonObj["repairs"];
    
    for (var i = 0; i < repairs.length; i++) {
        var row = document.createElement("tr");
        
        for (var j = 0; j < repairs[i].length; j++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        
        td1.textContent = repairs[i].service;
        td2.textContent = repairs[i].price;
        td3.textContent = repairs[i].timeframe;
        }
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        table.appendChild(row);
    }
}
    
