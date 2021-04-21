/*
 * Author: Ayline Castrejon
 * Created: April 20, 2021
 * License: Public Domain
 */


var endpoint = "https://api.kanye.rest/"

// Add a click event to the button
  $("#activate").click(function(){
    //When a user clicks the button, use a jQuery AJAX call to fetch output from your API
      $.ajax({
          url: endpoint,
          type: "GET",
    })

    .done(function(data) {
        console.log(data);
      // Put the output of the AJAX call in the output div.
        $("#output").append("<p>" + data.message);

    })
});
