
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