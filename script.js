// Change navbar color while scrolling

window.addEventListener("scroll", function () {

    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#ff9800";
    }
    else {
        navbar.style.backgroundColor = "#0d47a1";
    }

});