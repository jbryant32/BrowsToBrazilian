(function($) {

  "use strict";
   var clickState = 1;
    // Enquiry Form Ajax Submit Ans validation
    
    if ($('form[name="enqform"]').length) {
        
        $('form[name="enqform"]').on('submit', function () {
           
            var This = $(this);
      
            if ($(This).valid()) {
                var action = "/sendmail"
                var header = { "Site-Location": "adorehairstudio" }

                var data_value = unescape($(This).serialize());
                console.log(data_value.append);
                $.ajax({
                    type: "POST",
                    url: action,
                    data: data_value,
                    headers: header,
                    error: function (xhr, status, error) {
                        confirm('The page save failed.');
                    },
                    success: function (response) {
                        $('#ajax_contactform_msg').html("<p style='text-align:center'>Thank You!</p>");
                        $('#ajax_contactform_msg').slideDown('slow');
                        console.log(response);
                        if (response !== null) $(This).slideUp('slow');
                    }
                });
            }
            return false;
        });

        $('form[name="enqform"]').validate({
            onfocusout: function (element) {
                $(element).valid();
            },
            rules: {
                txtname: { required: true },
                txtemail: { required: true, email: true },
                txtmessage: { required: true }
            }
        });

    }


    $('#header-vistus').on('click', () => {

        var target = $(".map-section")
        console.log(target);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top

            }, 1000, function () {
                clickState = 1;
            });
            return false;
        }
    })

    $('#header-enquire').on('click', () => {
     
        var target = $("#Contact")
        console.log(target);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top

            }, 1000, function () {
                clickState = 1;
            });
            return false;
        }
    })

  $('a[href*="#"]:not([href="#"])').on('click', function() {
    clickState = 0;

    if($(this).parent().parent().hasClass('navbar-nav')) {
      $('.navbar-nav li').removeClass('active');
      $(this).parent().addClass('active');
    }
    
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
          
        }, 1000, function() {
          clickState = 1;
        });
        return false;
      }
    }
  });

  $(window).scroll(function() {
    if(clickState === 1) {
      $('.navbar-nav li a').each(function(){
        var href = $(this).attr('href');
        var hrefPos = $(href).offset().top;
        var currentPos = $('body').scrollTop();
        if(currentPos > (hrefPos-100)) {
          $('.navbar-nav li').removeClass('active');
          $(this).parent().addClass('active');
        } else {
          $(this).parent().removeClass('active');

        }
      });
    }

    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });

  $(document).on('ready', function() {
    $('.single-item').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
          }

        ]
    });
    $('.about-item').slick();
  });

})(jQuery);
