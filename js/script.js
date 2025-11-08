const navLinks = document.getElementById("navLinks");

function showMenu() {
    var isHidden = true;
    navLinks.style.right = "0";
   isHidden? navLinks.style.display = "block" : navLinks.style.display = "none";

   
}

function hideMenu() {
    isShown = true;
    navLinks.style.right = "-200px";
    isShown? navLinks.style.display = "none" : navLinks.style.display = "block";
    
}

$('#carousel-1').carousel({
    interval: 4000,
    wrap: true,
    keyboard: true
});

$('#carousel-2').carousel({
    interval : 8000,
    wrap : true,
    keyboard : true
});


