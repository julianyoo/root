$(document).ready(function(){

    $('#main').load('home.html').hide().fadeIn(1000);

    $('#projects','#project-button').click(function(){
        event.preventDefault();
        $('#main').load('projects.html').hide().fadeIn(1000);
    });

    $('#home').click(function(){
        event.preventDefault();
        $('#main').load('home.html').hide().fadeIn(1000);
    });
});