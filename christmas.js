
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



// christmas tree 
// add what will be the moving object
var draggable = document.querySelectorAll(".decoration");
// add the position where the decorations should be dropped 
var target = document.getElementById("drop-target");

draggable.forEach(function(element) {
  element.addEventListener("dragstart", function(event) {
    console.log(event)
  })
})

target.addEventListener("dragover", function(event) {
  event.preventDefault()
})

target.addEventListener("drop", function(event) {
  target.prepend(draggable)
})



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

var question1 = "What color is Santa Claus's suit?";
var question2 = "What do people usually put on top of a christmas tree?";
var question3 = "What is the name of the reindeer with a red nose?";
var question4 = "In which month is Christmas celebrated?";
var question5 = "What do people often hang by the fireplace for Santa to fill with gifts?";

var all_questions = [question1, question2, question3, question4, question5];

var choices1 = ("Green and gold", "Red and white", "Blue and silver");
var choices2 = ("A star", "A candy cane", "A snow globe");
var choices3 = ("Dasher", "Rudolph", "Blitzen");
var choices4 = ("November", "December", "January");
var choices5 = ("Mittens", "Stockings", "Scarves");

var all_choices = [choices1, choices2, choices3, choices4, choices5];

var i = 0;
var question = document.querySelector(".aside-quiz");
var choice = document.querySelector(".aside-answer");

function start() {
  
}