/*
 * Author: Ayline Castrejon
 * Created: March 3, 2021
 * License: Public Domain
 */

var maxXdelta = 50;
var maxYdelta = 50;

var titleEl = document.getElementById("changeme");
console.log("Here's da button:", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Here's da button:", buttonEl);

var betterEl = document.getElementById("better-button");
console.log("Here's the other button:", betterEl);

var inputEl = document.getElementById("my-input");
console.log("Here's the input field:", inputEl);

buttonEl.addEventListener("click", function() {
  var name = inputEl.value;
  // var name= prompt("What's your name?");
  titleEl.innerText = "Hello,", name;
  inputEl.value = "",
})

betterEl.addEventListener("mouseover", function() {
  console.log("Mouseover");
//pick random distance for x and y
  var xDelta = Math.floor(Math.random() * maxXdelta);
  var yDelta = Math.floor(Math.random() * maxYdelta);
//pick random direction for x and y
  var xDir = Math.floor(Math.random() * 3) - 1);
  var yDir = Math.floor(Math.random() * 3) - 1);
// create vector
  var xDelta = xDelta * xDir;
  var yDelta = yDelta * yDir;

  var curX = betterEl.offsetLeft;
  var curY = betterEl.offsetTop;

  var newX = curX + xDelta;
  var newY = curY + yDelta;
}
