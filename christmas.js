
// snow for the header 
function snow() {
  //   give a position where the snow should be 
  var header = document.querySelector("header");

  //   see how many snowflakes there are in the .flake 
  var flakes = document.querySelectorAll(".flake");

  // if there are more than 50 flakes saved in the var, remove the first one.
  //   this is to make the functionality of the website better
  if (flakes.length > 50) {
    flakes[0].remove();
  }

//   create a new div to save all the flakes in
  var flake = document.createElement("div");
//   giv the flake a style 
  flake.innerHTML = "&#10052;";
//   add the style to the class css 
  flake.classList.add("flake");

//   save the width of the header div 
  var width_header = header.offsetWidth;
//   use a randon number within the headers width to position the flakes 
  var place = Math.random() * width_header;
//   start hte position from left, then place the flakes randomly 
  flake.style.left = place + "px";


//  use the parent header to add the child flake and make the snowflakes visiable.
  header.appendChild(flake);
}

//  make the snow function run every 6s. 
setInterval(snow, 600);


function counter() {
 
    // time and date now (startdate)
    var now = new Date();
    // date for christmas (enddate) (months starts with index 0)
    var christmas = new Date(2025, 11, 24, 0, 0);
    // save difference between the dates
    var diff = christmas - now;
 
    if (diff < 0) {
        document.querySelector(".Days").innerText = "0";
        document.querySelector(".Hours").innerText = "0";
        document.querySelector(".Minutes").innerText = "0";
        document.querySelector(".Seconds").innerText = "0";
        return;
    }
   
    else {
    // save each counter individually
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
 
    // we have calculated the diff in ms and now want to see how many days we can remove from that number
    var days_diff = Math.floor(diff / days);
    // update the diff var with the remaining ms
    diff = diff % days;
 
    var hours_diff = Math.floor(diff / hours);
    diff = diff % hours;
 
    var minutes_diff = Math.floor(diff / minutes);
    diff = diff % minutes;
 
    var seconds_diff = Math.floor(diff / seconds);
 
    // connect to divs on html document and show the diffs
    document.querySelector(".Days").innerText = days_diff;
    document.querySelector(".Hours").innerText = hours_diff;
    document.querySelector(".Minutes").innerText = minutes_diff;
    document.querySelector(".Seconds").innerText = seconds_diff;
 
    setInterval(counter, 1000);
    }
}
counter();


// christmas riddle 

function check_answer() {
  
  // get the user input 
  var input = document.getElementById("riddle_answer").value;
  // save the riddle_answer div as a different var without value 
  var inputElement = document.getElementById("riddle_answer");
  // if the user accidentally types a space or upper/lower case letters
  input = input.trim().toLowerCase();
  // show the user's input in console 
  console.log(input);

  // if user's input is christmas lights 
  if (input === "christmas lights") {
    // show result in console 
    console.log("Correct answer!")
    // change background color and show result to the user 
    inputElement.style.backgroundColor = "green";
    inputElement.value = "CORRECT!";
  }
  // if user's input is lights 
  else if (input === "lights") {
    // show result in console 
    console.log("Correct answer!")
    // change background color and show result to the user 
    inputElement.style.backgroundColor = "green";
    inputElement.value = "CORRECT!";
  }
  // if user's input is fairy lights 
  else if (input === "fairy lights") {
    // show result in console 
    console.log("Correct answer!")
    // change background color and show result to the user 
    inputElement.style.backgroundColor = "green";
    inputElement.value = "CORRECT!";
  }
  // if user types anything else 
  else {
    // show result in console 
    console.log("Wrong answer!")
    // show the result to the user 
    inputElement.style.backgroundColor = "red";
    inputElement.value = "WRONG!";
  }
}

// christmas quiz 

