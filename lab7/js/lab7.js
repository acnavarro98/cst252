/*
 * Author: Ayline Castrejon
 * Created: February 23, 2021
 * License: Public Domain
 */

 //Create a new function in your file, call it what you like, but choose wisely.
 function sortUserName() {

 //In the function, declare a variable userName and use window.prompt() to get the user's name from the user.
 var userName = window.prompt("Hi. Please type in your name so I can sort it.");
 console.log("userName =", userName);

 //Sort the letters of the user's name and return those from the function.
 var nameArray = userName.split('');
 console.log("nameArray =", nameArray);

 var nameArraySort = nameArray.sort();
 console.log("nameArraySort =", nameArraySort);

 var nameSorted = nameArraySort.join('');
 console.log("nameSorted =", nameSorted);

  return nameSorted;
}
 //Outside of the function, call the function and output the results with document.write() to neatly output the user's sorted name.
document.writeln("I've sorted your name: ", sortUserName(), "</br>");
