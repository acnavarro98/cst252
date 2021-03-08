/*
 * Author: Ayline Castrejon
 * Created: March 5, 2021
 * License: Public Domain
 */

//Borrow the sort() function or my anagram() function from Lab 7.
    function sortUserName() {
    var userName = inputEl.value;
    var nameArray = userName.split('');
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join('');
     return nameSorted;
    }

  buttonEl = document.getElementById("my-button");
  console.log("button element:", buttonEl);

  inputEl = document.getElementById("user-name");
  console.log("input element:", inputEl);

  outputEl = document.getElementById("output");
  console.log("output element:", outputEl);

//Attach an event listener to your button that does the following:
buttonEl.addEventListener("click", function(){

  // Gets the value of your input field
  var userName = inputEl.value;

  //Runs that value through your sort() or anagram() function and saves the results.
  var newName = (sortUserName(userName));

  //Replaces the html in <div id=output> with the results.
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
