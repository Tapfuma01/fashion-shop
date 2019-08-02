function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "topbar_nav") {
        x.className += " responsive";
    } else {
        x.className = "topbar_nav";
    }
}