var blur1 = document.getElementById("blur1");

function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
    blur1.classList.add("blur-overlay");
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
    blur1.classList.remove("blur-overlay");
} 