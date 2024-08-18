window.onscroll = function() { changeNavbarColor(); };

function changeNavbarColor() {
    var navbar = document.querySelector(".navbar");
    var links = navbar.querySelectorAll("a");  // Select all <a> elements inside the navbar
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.backgroundColor = "#c5c3c3";
        
        // Change the color of each link to black
        links.forEach(function(link) {
            link.style.color = "black";
        });
    } 
    else {
        navbar.style.backgroundColor = "transparent";
        
        // Change the color of each link to white
        links.forEach(function(link) {
            link.style.color = "white";
        });
    }
}
