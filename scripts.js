$(document).ready(function() {

    
    $(".slidebtn").click(function () {
    
        $(this).next(".slider").slideToggle(1000);
    });
});

