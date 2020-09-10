var numSqaures = 6;
var colors = generateRandomColors(numSqaures);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSqaures = 3 : numSqaures = 6;
    reset();

  });
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSqaures);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener
  squares[i].addEventListener("click", function() {
    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "try again!";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a random color for red
  var r = Math.floor(Math.random() * 256);
  //pick a random color for green
  var g = Math.floor(Math.random() * 256);
  //pick a random color for blue
  var b = Math.floor(Math.random() * 256);
  //rgb(r, g, b)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
