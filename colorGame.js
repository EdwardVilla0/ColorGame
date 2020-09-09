var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener
  squares[i].addEventListener("click", function(){
    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "try again!";
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickedColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a random color for red
  var r = Math.floor(Math.random() * 256);
  //pick a random color for green
  var g = Math.floor(Math.random() * 256);
  //pick a random color for blue
  var b = Math.floor(Math.random() * 256);
  //rgb(r, g, b)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
