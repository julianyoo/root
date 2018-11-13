$(document).ready(function(){
    $('#main').load('home.html');

    $('#projects').click(function(){
        event.preventDefault();
        $('#main').load('projects.html'); 
    });

    $('#home').click(function(){
        event.preventDefault();
        $('#main').load('home.html');
    });

});