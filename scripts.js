$(document).ready(function() {

    $('.scrollspy').scrollSpy({ scrollOffset: 130});
    
    $(".slidebtn").click(function () {
    
        $(this).next(".slider").slideToggle(1000);
    });
});

