myFunction();

function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    
    var day = new Array (31);
    day[1] = "1";
    day[2] = "2";
    day[3] = "3";
    day[4] = "4";
    day[5] = "5";
    day[6] = "6";
    day[7] = "7";
    day[8] = "8";
    day[9] = "9";
    day[10] = "10";
    day[11] = "11";
    day[12] = "12";
    day[13] = "13";
    day[14] = "14";
    day[15] = "15";
    day[16] = "16";
    day[17] = "17";
    day[18] = "18";
    day[19] = "19";
    day[20] = "20";
    day[21] = "21";
    day[22] = "22";
    day[23] = "23";
    day[24] = "24";
    day[25] = "25";
    day[26] = "26";
    day[27] = "27";
    day[28] = "28";
    day[29] = "29";
    day[30] = "20";
    day[31] = "31";
    var l = day[d.getUTCDate()];
        
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var m = month[d.getMonth()];
    
    var y = [d.getFullYear()];
    
    document.getElementById("currentdate").innerHTML = n + ", " + l + " " + m + " " + y;
}