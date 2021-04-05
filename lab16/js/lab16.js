/*
 * Author: Ayline Castrejon
 * Created: April 5, 2021
 * License: Public Domain
 */

// Create a <button> element (in jQuery, NOT In your HTML). Give it a text label and add it to your output div
$("#output").append("<button id='button'>Press Me!");

// Add a click event to it that will bring up an alert
$("button").click(function() {
  alert("You clicked the button!");
});

// Restyle the button with jQuery so it is a pleasant green.
$("button").css("color", "green")
