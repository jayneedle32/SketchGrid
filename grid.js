$(document).ready(function () {

    $('body').prepend('<div class="container"></div>')
    
        for (var i = 1; i < 17; i++) {
        $('.container').append('<div class="row"></div>')
    }

    for (var i = 1; i < 17; i++) {
        $('.row').append('<p>&nbsp;</p>');
    }
    
    $('.row p').click(function(){
    $(this).css('background-color', 'black');
});

    $('.container').before('<div class="button" style="text-align:center"><p>Click Here to Refrech and Resize Grid</p></div>')

    $('.button').on('click', function () {
        var userAnswer1 = prompt("How wide would you like the grid?");
        if (userAnswer1 > 50) {
            confirm("Sorry, you can't make a grid wider than 50.");
        } else {
            var userAnswer2 = prompt("How tall would you like the grid?");
            if (userAnswer2 > 50) {
                confirm("Sorry, you can't make a grid taller than 50.");
            } else {
                $('.row').remove();
                for (var i = 1; i < userAnswer1; i++) {
                    $('.container').append('<div class="row"></div>')
                }
                for (var i = 1; i < userAnswer2; i++) {
                    $('.row').append('<p>&nbsp;</p>');
                }
                 $('.row p').click(function(){
   				 $(this).css('background-color', 'black');
});
            }
        }
    });

    $('.button p').css({
        width: '433px',
        height: '25px',
        margin: '10px auto 10px auto',
        border: '1px solid #18ab29',
    }).mouseenter(function () {
        $(this).css('background-color', 'gray')
            .mouseleave(function () {
            $(this).css('background-color', 'white')
        });
    });

});
