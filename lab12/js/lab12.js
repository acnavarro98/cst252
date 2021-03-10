/*
 * Author: Ayline Castrejon
 * Created: March 10, 2021
 * License: Public Domain
 */

// Create a "FizzBuzz" function similar to how we did in class.
  //function fizzBuzz () {
  // Loop through numbers 1 to 200, listing them as you go
    for (var num = 1; num <= 200; num++) {

    // Make it so the output of your program appears in your output div.
      outputEl = document.getElementById("output");
      newEl = document.createElement("p");

    //If the number is a multiple of 3, 5 and 7: print "FizzBuzzBoom!"
      if (num % 105 == 0) {
        newEl.innerHTML = num + " - FizzBuzzBoom!";
        outputEl.appendChild(newEl);
        console.log("FizzBuzzBoom!");
      }
      //If the number is a multiple of 5 and 7: print "BoomBuzz!"
        else if (num % 35 == 0) {
          newEl.innerHTML = num + " - BoomBuzz!";
          outputEl.appendChild(newEl);
          console.log("BoomBuzz!");
      }
      //If the number is a multiple of 3 and 7: print "FizzBoom!"
        else if (num % 21 == 0) {
          newEl.innerHTML = num + " - FizzBoom!";
          outputEl.appendChild(newEl);
          console.log("FizzBoom!");
      }
      //If the number is a multiple of 3 and 5: print "FizzBuzz!"
        else if (num % 15 == 0) {
          newEl.innerHTML = num + " - FizzBuzz!";
          outputEl.appendChild(newEl);
          console.log("FizzBuzz!");
      }

      // If the number is a multiple of 3, if should print "Fizz!"
        else if (num % 3 == 0) {
          newEl.innerHTML = num + " - Fizz!";
          outputEl.appendChild(newEl);
          console.log("Fizz!");
      }
      // If the number is a multiple of 5, it should print "Buzz!"
        else if (num % 5 == 0) {
          newEl.innerHTML = num + " - Buzz!";
          outputEl.appendChild(newEl);
          console.log("Buzz!");
      }
      // If the number is a multiple of 7, it should print "Boom!"
        else if (num % 7 == 0) {
          newEl.innerHTML = num + " - Boom!";
          outputEl.appendChild(newEl);
          console.log("Boom!");
      }
        else {
          newEl.innerHTML = num;
          outputEl.appendChild(newEl);
          console.log(num);
      }
    }
// }
//Don't forget to call your function.
