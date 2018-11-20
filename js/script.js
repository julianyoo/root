$(document).ready(function(){

    $('#main').load('home.html').hide().fadeIn(1000);

    $('#projects').click(function(){
        event.preventDefault();
        $('#main').load('projects.html').hide().fadeIn(1000);
    });

    $('#home-projects').click(function(){
        event.preventDefault();
        $('#main').load('projects.html').hide().fadeIn(1000);
    });

    $('#home').click(function(){
        event.preventDefault();
        $('#main').load('home.html').hide().fadeIn(1000);
    });

    var myVar;

    function myFunction() {
        myVar = setTimeout(showPage, 3000);
    }

    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
    }
});