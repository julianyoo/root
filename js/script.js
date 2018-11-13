$(document).ready(function(){

    function fader() {
        $("#main").fadeIn(700);
    }

    $('#main').load('home.html', {}, fader);

    $('#projects').click(function(){
        event.preventDefault();
        $('#main').load('projects.html'); 
    });

    $('#home').click(function(){
        event.preventDefault();
        $('#main').load('home.html');
    });

});