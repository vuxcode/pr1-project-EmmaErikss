function gift(box) {

    var date = box.querySelector(".date");
    var gift = box.querySelector(".gift");

    if (date.style.display === "none") {
        gift.style.display = "none";
        date.style.display = "block";
    }
    else {
        date.style.display = "none";
        gift.style.display = "block";
    }

}