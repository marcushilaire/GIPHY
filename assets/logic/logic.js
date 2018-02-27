var searchTerms = ["Greys Anatomy", "My Hero Academia", "Arrested Development", "Cats", "Dogs", "Captain America", "Brooklyn 99", "The Office", "Fraiser", "Pickle Rick", "Puppies", "Pygmy Goats" ]
var buttonGenerate = function(){
    $("#buttonsDiv").empty();
    for (var i=0; i<searchTerms.length; i++){
        var button = $("<button>").text(searchTerms[i])
        .attr({
            "class": "terms btn",
            "data-term": searchTerms[i],
        })
        $("#buttonsDiv").append(button);
    }
};

buttonGenerate();

$("#addQuery").on("click", function(event){
    event.preventDefault();
    var newQuery = $("#inputQuery").val();
    if(newQuery !== ""){
    searchTerms.push(newQuery);
    buttonGenerate();
    }
});

$(document).on("click",".terms", function(){
    $("#imgDump").empty()
    var term = $(this).attr("data-term");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+term+"&api_key=faVpcYpz55WtmrGnbEZLrtW06l9qyXdi&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var imageSet =response.data;
        for(var i=0; i<imageSet.length; i++){
        var div = $("<div>");
        var rating = $("<p>").text("This gif is rated: " + imageSet[i].rating);
        var img = $("<img>").attr({
            "src": imageSet[i].images.fixed_height_still.url,
            "class": "gifs img-responsive",
            "data-still": imageSet[i].images.fixed_height_still.url,
            "data-active":imageSet[i].images.fixed_height.url,
            "data-state": "still"
        })
        div.append(rating, img).attr("class", "gifDiv");
        $("#imgDump").append(div)
        }})  
});

$(document).on("click", ".gifs", function(){
    var state = $(this).attr("data-state");
    var pause = $(this).attr("data-still");
    var play = $(this).attr("data-active");
    if (state == "still"){
        $(this).attr("src", play);
        $(this).attr("data-state", "active");
    } else{
        $(this).attr("src", pause);
        $(this).attr("data-state", "still");
    }
})