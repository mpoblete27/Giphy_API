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
});

//searching giphy using ajax
function displayGifInfo(){
    var gif = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  gif + "&api_key=u0yDcmpSHAUAtpBe1a3aIdituU09CnfS";
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response);
    var gifArray = response.data;
    // console.log(gifArray)
    for(var i = 0; i < gifArray[10]; i++){
    var image = $('<img>');
    image.attr('src', gifArray[i].images.fixed_height_still.url);
    image.attr('data-state', "still");
    image.attr('data-still', gif.images.fixed_height_still.url);
    image.attr('data-animate', gif.images.fixed_height.url);
    image.attr("class", "clicky");
    $('.gif-container').append(image);
    }
    })};
// When the user clicks on a button, the page should grab 10 static, 
// non-animated gif images from the GIPHY API and place them on the page.
// for moving image from array: data.[i].images.fixed_height
// for rating: data.[i].rating 
// image.attr('src', gifArray[i].images.fixed_height.url);
// image.attr('src', gifArray[i].images.rating);
// <!-- api key: u0yDcmpSHAUAtpBe1a3aIdituU09CnfS -->