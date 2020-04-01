$(document).on('scroll', function(){
    if($(window).scrollTop() > 50){
        $("nav").addClass("shrink");
    } else {
        $("nav").removeClass("shrink");
    }
});
