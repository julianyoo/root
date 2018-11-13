$(document).ready(function(){

    $('#reveal').click(function(){
        $('#ajax-content').load('/projects.html'); 
        alert("Hello! I am an alert box!!");
    });

});