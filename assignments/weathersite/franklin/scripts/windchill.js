windChill();
function windChill() {
    var h = 90;
    var l = 66;
    var t = (h + l) / 2;
    var s = Math.pow(12, 0.16);

    var w;
    
    var w = Math.round(35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s));
    
    document.getElementById("windchill").innerHTML = w + "&deg;";
}