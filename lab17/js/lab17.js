/*
 * Author: Ayline Castrejon
 * Created: April 9, 2021
 * License: Public Domain
 */

// Add a click event to each button
// In the event code, toggle a new class within the div
$("#mainidea-button").click(function (){
  $("#mainidea").toggleClass("fred");
});

$("#challenges-button").click(function (){
  $("#challenges").toggleClass("george");
});

$("#results-button").click(function (){
  $("#results").toggleClass("sam");
});
