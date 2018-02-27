console.log("link test")
var searchTerms = ["Greys Anatomy", "My Hero Academia", "Arrested Development", "Cats", "Dogs", "Luther", "Brooklyn 99", ]
var buttonGenerate = function(){
    $("#buttonsDiv").empty();
    for (var i=0; i<searchTerms.length; i++){
        var button = $("<button>").text(searchTerms[i])
        .attr({
            "class": "terms",
            "data-term": searchTerms[i],
        })
        $("#buttonsDiv").append(button);
    }
}
buttonGenerate();
$("#addQuery").on("click", function(event){
    event.preventDefault();
    var newQuery = $("#inputQuery").val();
    console.log(newQuery);
    searchTerms.push(newQuery);
    buttonGenerate();
})
$(".terms").on("click", function(){
    var term = $(this).attr("data-term");
    console.log(term);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+term+"&api_key=faVpcYpz55WtmrGnbEZLrtW06l9qyXdi&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(response.data);
        var imageSet =response.data;
        console.log(imageSet);
        for(var i=0; i<imageSet.length; i++){
        var div = $("<div>");
        var rating = $("<p>").text(imageSet[i].rating);
        console.log(rating);
        var img = $("<img>").attr({
            "src": imageSet[i].images.fixed_height_still.url,
        })
        div.append(rating, img);
        $("#imgDump").append(div)
        }})
    
})