window.onscroll = function() { changeNavbarColor(); };

function changeNavbarColor() {
    var navbar = document.querySelector(".navbar");
    var logo = document.getElementById("navbarLogo");
    var links = navbar.querySelectorAll("a");  // Select all <a> elements inside the navbar
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight; // Viewport height in pixels
    var vhEquivalent = (100 / viewportHeight) * 500; // Convert 100px to vh

    if ((scrollPosition / viewportHeight) * 500 > vhEquivalent) {
        // navbar.style.backgroundColor = "#c5c3c3";
        navbar.style.backgroundColor = "white";
        
        // Change the color of each link to black
        links.forEach(function(link) {
            link.style.color = "black";
        });

        logo.style.opacity=1;
    } 
    else {
        navbar.style.backgroundColor = "transparent";
        
        // Change the color of each link to white
        links.forEach(function(link) {
            link.style.color = "white";
        });

        logo.style.opacity=0;
    }
}
