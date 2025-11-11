function snow() {
  var header = document.querySelector("header");

  // Räkna hur många flingor som redan finns
  var flakes = document.querySelectorAll(".flake");

  // Om det finns fler än 50 flingor → ta bort den första (äldsta)
  if (flakes.length > 50) {
    flakes[0].remove();
  }

  // Skapa en ny flinga
  var flake = document.createElement("div");
  flake.innerHTML = "&#10052;";
  flake.classList.add("flake");

  var width_header = header.offsetWidth;
  var place = Math.random() * width_header;
  flake.style.left = place + "px";


//  use the parent header to add the child flake and make the snowflakes visiable.
  header.appendChild(flake);
}

//  make the snow function run every 6s. 
setInterval(snow, 600);
