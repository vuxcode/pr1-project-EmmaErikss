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

// todays date in numbers 
var now = new Date();
// Convert todays date into a actual date 
var today = now.getDate();
// Refer to all the box divs 
var boxes = document.querySelectorAll(".box");
var boxList = [...boxes];

// check each box 
boxList.forEach(function (box){
    // use the p value in the boxes 
    var date = box.innerText;
    console.log(date);

    // if todays date is less than the p element value 
    if (today < date) {
        // the hatch is locked
        console.log("Locked!");
        box.classList.add("locked");
    }
    // else the hatch is unlocked
    else{
        console.log("Unlocked!");
    }
});