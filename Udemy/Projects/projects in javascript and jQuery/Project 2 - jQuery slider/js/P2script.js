$(document).ready(function(){
    // set options & declare variables
    var speed = 500;                // fade speed
    var autoSwitch = true;          // auto slider option
    var autoSwitchSpeed = 3000;     // auto slider speed
    
    // add initial active class to first slide
    $('.slide').first().addClass('active');
    
    // hide all slides
    $('.slide').hide();
    
    // show first slide only
    $('.active').show();
    
    // next slide logic
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    // prev slide logic
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    // use event handler to switch between slides
    $('#next').on('click', nextSlide);
    $('#prev').on('click', prevSlide);
    
    // auto slider using the set interval function
    if(autoSwitch === true){
        setInterval(nextSlide, autoSwitchSpeed);
    }   
});