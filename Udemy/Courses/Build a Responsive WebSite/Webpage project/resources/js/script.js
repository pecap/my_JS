$(document).ready(function () {
            
    /* Sticky navigation - using waypoint 'direction' to hide/show sticky nav bar */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
    
    /* using 'offset' to hit the waypoint earlier (or later) */
        offset: '60px;'
    });   
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation scroll using 'smooth scrolling' snippet */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });   
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });   
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });  
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile Nav bar */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');       // use a variable to write cleaner code (instead of all the $ stuff)
        var icon = $('.js--nav-icon i');    // Reusable code for selectors is quite handy
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        };
    });
    
    /* Maps */
    
    var map = new GMaps({
        div: '.map',
        lat: 38.7437396,
        lng: -9.075,
        zoom: 12
        // initial value is 16
    });
    map.addMarker({
        lat: 38.7437396,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
        }
    });
});