// function for what will happen when the user click on each hatch
function gift(box) {

    // refer to the date div, and the gift div, box.query to refer to just the one they click.
    var date = box.querySelector(".date");
    var gift = box.querySelector(".gift");

    // if the number is hidden
    if (date.style.display === "none") {
        // hide gift text and show number on click
        gift.style.display = "none";
        date.style.display = "block";
    }
    else {
        // or gift text is hidden, hide number and show gift on click.
        date.style.display = "none";
        gift.style.display = "block";
    }

}