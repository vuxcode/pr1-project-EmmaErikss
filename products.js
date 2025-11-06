// save both button and filters location so the computer can find the correkt id's to work with
var filter_button = document.querySelector(".filter_button")
var filter = document.querySelector(".filter")

// tell what is gonna happen when the button is clicked 
filter_button.onclick = function() {
    // check if the content is visible or not 
    var display = filter.style.display;
    // if it is visible, then hide it on click
    if (display === "block") {
        filter.style.display = "none";
    }
    // if it is already hidden, then show the content on click
    else {
        filter.style.display = "block";
    }
};