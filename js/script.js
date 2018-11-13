$(document).ready(function(){

    $('#projects').click(function(){
        event.preventDefault();
        $('#main').load('projects.html'); 
        alert("Hello! I am an alert box!!");
    });

});