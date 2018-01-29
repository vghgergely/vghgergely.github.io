$(document).ready(function() {
    var width = $(window).width();
    if (width < 1280) {
        $(".display-alert").show();
    }
    $('.scrollspy').scrollSpy({ scrollOffset: 130});
    
    $(".slidebtn").click(function () {
    
        $(this).parent(".projects-arrow").prev(".slider").slideToggle(1000);
        $(this).children().toggleClass("fa-angle-double-up fa-angle-double-down");
    });
    
});

