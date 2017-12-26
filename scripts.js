$(document).ready(function() {

    $('.scrollspy').scrollSpy({ scrollOffset: 130});
    
    $(".slidebtn").click(function () {
    
        $(this).parent(".projects-arrow").prev(".slider").slideToggle(1000);
        $(this).children().toggleClass("fa-angle-double-up fa-angle-double-down");
    });
    
});

