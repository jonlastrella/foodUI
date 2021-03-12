$(document).ready(function(){
    $('.hamburger').click(function(){
        $('nav ul').toggleClass('open');
        $('section').toggleClass('hide');
        $('.line2').toggle('fadeout');
    })
})