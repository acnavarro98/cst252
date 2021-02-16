/*
 * Author: Ayline Castrejon
 * Created: February 16, 2021
 * License: Public Domain
 */

//Declare an array myTransport that lists all of the forms of transportation you use to get around.
var myTransport = ["Ford Five Hundred", " rides from family", " bike", " Uber"];
//Declare an object myMainRide that collects all the data you specified for your primary vehicle in Lab 5
var myMainRide = {
  make: "Ford",
  model: "Five Hundred",
  color: "red",
  year: 2005,
  age: function() {
    return 2021-age;
  }
}
//Use document.writeln() to neatly output myTransport
document.writeln("My types of transportation: " + myTransport + "<br>");
//Output myMainRide
document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
