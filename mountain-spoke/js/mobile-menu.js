var blur = document.getElementById("blur");

function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
    blur.classList.add("blur-overlay");
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
    blur.classList.remove("blur-overlay");
} 