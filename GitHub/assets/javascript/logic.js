
$("#form-submit").on("click", function(snapshot) {
    event.preventDefault();

    var stateInput = $("#states").val();

    $.ajax({
        headers: {
            'X-API-Key': '4UsxiRlcgB4XxtvP2sFOKTaic6LTaFwZ7UEBwBiH',
        }, 
        url: "https://api.propublica.org/congress/v1/members/senate/" + stateInput + "/current.json",
        method: 'GET',
        crossDomain: true
    }).then(function(whatever) {
        var results = whatever.results;
        console.log(results);
    })

    console.log("hello");

})