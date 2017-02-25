 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/*  Skill Show
------------------------------------------------------ */

    var animation_speed = 1000;

    if ($('body').hasClass("slide-vertical")) {
        var tid = setInterval(tagline_vertical_slide, 2500);
    }
     else{
        var tid = setInterval(tagline_fade, 2500);
    }

    // Fade Style
    function tagline_fade(){
        var curr = $(".switch a.active");
        curr.removeClass("active");
        var nextTag = curr.next('a');
        if (!nextTag.length) {
            nextTag = $(".switch a").first();
        }
        nextTag.addClass("active");
    }

    // vertical slide
    function tagline_vertical_slide(){
        var curr = $(".switch a.active");
        curr.removeClass("active").addClass("vs-out");
        setTimeout(function(){
            curr.removeClass("vs-out");
        }, animation_speed);

        var nextTag = curr.next('a');
        if(!nextTag.length){
            nextTag = $(".switch a").first();
        }
        nextTag.addClass("active");

    }

    function abortTimer() {
        clearInterval(tid);
    }


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$('.smoothscroll').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1500, 'swing', function () {
        window.location.hash = target;
    });

});


/*----------------------------------------------------*/
/*  Fade In/Out Primary Navigation
------------------------------------------------------ */

$(window).on('scroll', function() {

    var h = $('#head').height();
    var y = $(window).scrollTop();
        var nav = $('body #nav-wrap');

        if ( (y > h*.10) && (y < h) && ($(window).outerWidth() > 600 ) ){
            nav.fadeOut('fast');
        }
            else{
               if ( y < h*.10) {
                    nav.removeClass('navback').fadeIn('fast');
               }
               else{
                    nav.addClass('navback').fadeIn('fast');
               }
            }
});



/*----------------------------------------------------*/
/* Portfolio
------------------------------------------------------ */
    $(function() {
        Grid.init();
    });

/*----------------------------------------------------*/
/* Maps
------------------------------------------------------ */
      // main directions
    map = new GMaps({
        el: '#map',
        lat: -7.8452888,
        lng: 110.4036532,
        zoom: 12,
        zoomControl : true,
        zoomControlOpt: { style : 'SMALL', position: 'TOP_LEFT' },
        panControl : false,
        scrollwheel: false
    });
    // add address markers
    map.addMarker({
        lat: -7.8452888,
        lng: 110.4036532,
        title: 'LILIN',
        infoWindow: { content: '<p>Glondong No. 10 Rw 06, Bantul, Yogyakarta</p>' }
    });
});



/*----------------------------------------------------*/
/* Owl
------------------------------------------------------ */
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoHeight: true,
        // dots: true,
    });

/*----------------------------------------------------*/
/* Blog Masonry
------------------------------------------------------ */

    // var container = document.querySelector('#container');
    // var msnry = new Masonry( container, {
    //   itemSelector: '.item',
    //   // columnWidth: 0,
    //   isFitWidth: true,
    // });

    $(function() {
        $('.blog-masonry').masonry({

            itemSelector : '.item',
            // coloumnWidth: function( containerWidth ){
            //     return containerWidth / 3;
            // },
            coloumnWidth: 300,
            isFitWidth: true,
            isAnimated: true
        });
    });

/*----------------------------------------------------*/
/* Pie Cart
------------------------------------------------------ */


    $('.chart').easyPieChart( {
        barColor: '#0EA549',
        trackColor: '#F2F2F2',
        scaleColor: false,
        lineWidth: 20,
        size: 160,
        animate:{
            duration: 5000,
            enabled: true,
        },
    //             lineCap:'circle'
    });


    //Ovveride the browser's submit with an ajax post:
    $('#contact-form').submit(function (e) {
      var $this = $(this),
        url = $this.attr('action');

      e.preventDefault();

      $.ajax({
        url: url,
        data: $this.serialize(),
        type: 'post',
        dataType: 'json',
        success: function (resp) {
          //console.log(resp);
          $('#contact-form-msg').formAlert(resp);
        }
      });

      //disable any further form interaction
      $this.hide(600); //hide it

      return false;
    });



});
