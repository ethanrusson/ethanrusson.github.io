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
    
