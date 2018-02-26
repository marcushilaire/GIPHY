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