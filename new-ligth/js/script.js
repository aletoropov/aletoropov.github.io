jQuery(document).ready(function() {
    let wHeight = jQuery(window).height();
    jQuery("#onePage").css("height",wHeight+"px");

    jQuery('[data-fancybox="gallery"]').fancybox({
        loop: true,
        autoFocus: false
    });

    jQuery('[data-fancybox="plans"]').fancybox({
        loop: true,
        autoFocus: false
    });
    
    //YouTube
    jQuery('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });

    //Slick Slider
    jQuery('.slider').slick({dots: true});

    //Mobile menu
    jQuery('.main_menu__burger').click(function(event) {
        jQuery('.main_menu').toggleClass('active');
        jQuery('.main_menu__burger').toggleClass('open');
        jQuery('body').toggleClass('lock');
    });

    //Add style for scroll
    jQuery(window).on('scroll', function() {
        jQuery(".doit_block").each(function() {
          if (isScrolledIntoView($(this))) {
            jQuery(this).find("#do_it_1").addClass("animate__fadeInLeft");
            jQuery(this).find("#do_it_2").addClass("animate__fadeInRight");
            jQuery(this).find("#do_it_3").addClass("animate__fadeInLeft");
            jQuery(this).find("#do_it_4").addClass("animate__fadeInRight");
            jQuery(this).find("#do_it_5").addClass("animate__fadeInLeft");
            jQuery(this).find("#do_it_6").addClass("animate__fadeInRight");
          }
        });
      });
      
      function isScrolledIntoView(elem) {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
      
        var elemTop = jQuery(elem).offset().top;
        var elemBottom = elemTop + jQuery(elem).height();
      
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
});

// плавный скролл до якоря
jQuery('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: jQuery(jQuery(this).attr('href')).offset().top
  }, 2000);
});