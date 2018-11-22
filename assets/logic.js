
var topics = ["Spiderman", "Thanos", "Iron Man", "Thor"];

//making a button 
function renderButtons() {
    $("#gif-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gif");
        newButton.attr("data-name");
        newButton.text("topics[i]");
        $("#gif-view").append(newButton);
    }
}

// when you click the button
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    topics.push(gif);
    renderButtons();
}




//searching giphy using ajax
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  buttonInterior + "&api_key=u0yDcmpSHAUAtpBe1a3aIdituU09CnfS";
   

  // <!-- api key: u0yDcmpSHAUAtpBe1a3aIdituU09CnfS -->
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
   
    // extract the array of gifs <--
    // loop through array <--
    // make a blank image container <--
    // add the url to gif to the image container <--
    // append to screen <--

    var gifArray = response.data;
    // console.log(gifArray)
    for(var i = 0; i < gifArray.length; i++){
      var image = $('<img>');
      image.attr('src', gifArray[i].images.fixed_height.url);
      $('.container').append(image);
    }

  });
    
    var topics = [];
