$("projects").click(function(){
    $.ajax({url: "/projects.html", success: function(result){
        $("#main").html(result);
    }});
});

$("home").click(function(){
    $.ajax({url: "/index.html", success: function(result){
        $("#main").html(result);
    }});
});