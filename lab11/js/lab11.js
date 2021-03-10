/*
 * Author: Ayline Castrejon
 * Created: March 7, 2021
 * License: Public Domain
 */

// Create a function sortingHat()
  // that takes a string as an argument: function sortingHat(str)
  function sortingHat(str) {

  // counts the letters in str and assigns it to a variable len
    var len = str.length;

  // uses modulus (% operator) to get the remainder with 4: mod = len % 4;
    var mod = len % 4;

  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
      if (mod == 0) {
        return "Griffindor"
    }
      else if (mod == 1) {
        return "Ravenclaw"
    }
      else if (mod == 2) {
        return "Slytherin"
    }
      else if (mod == 3) {
        return "Hufflepuff"
    }
}

  var myButton = document.getElementById("button");

// Create an event listener attached to #button
  myButton.addEventListener("click", function() {

  // that gets the value of #input and assigns it to a variable name
    var name = document.getElementById("input").value;

  // runs sortingHat(name) and stores the result in a variable house
    var house = sortingHat(name);

  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
    newText = "<p>The Sorting Hat has sorted you into: " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  });
