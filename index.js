var slideWidth = 0
var slideHeight = 0

function onResize(){
    slideWidth = $('.slider-item:nth-child(1)').width()
    slideHeight = $('.slider-item:nth-child(1)').height()

    $('#slider-outside').css({width: slideWidth, height: slideHeight})
}

$(document).ready(function (){
    onResize()

    var total = $('.slider-item').length
    var curr = 1;

    var firstLeft = $('#slider').position().left
    setInterval(function(){
        if(curr % total == 0) {
            $('#slider').animate({left: firstLeft}, {duration: 1000});
        } else {
            $('#slider').animate({left: $('#slider').position().left - slideWidth}, {duration: 1000});
        }
        curr = curr + 1
    }, 2000);
});