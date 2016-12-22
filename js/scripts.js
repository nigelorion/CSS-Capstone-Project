$(document).ready(function(){
  // $(".container").fadeIn();

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.home__top').fadeIn(900);
      } else {
        $('.home__top').fadeOut(600);
      }
    });

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      $('.header').css({
          'opacity': ((height - scrollTop) / height)
      });
  });

  $(window).scroll(function () {
  
      $(".fade").each(function () {
          if (($(this).offset().top - $(window).scrollTop()) < 20) {
              $(this).stop().fadeTo(100, 0);
          } else {
              $(this).stop().fadeTo('fast', 1);
          }
      });
  });


  $('.home__top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 500);
  });

  $("#header__click").on('click', function() {

    $("#header__click--show").fadeIn(600);

  })

  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#header__click--show').fadeOut(600);
      }
    });
    //
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 2000) {
    //       $('.hoodies').fadeIn(900).css("display", "flex");
    //       $('.shirts').fadeIn(1400).css("display", "flex");
    //     } if ($(this).scrollTop() < 2000) {
    //       $('.hoodies').fadeOut(1000);
    //       $('.shirts').fadeOut(1000);
    //     }
    //     if ($(this).scrollTop() > 800) {
    //       $('.tape').fadeIn(900).css("display", "flex");
    //     } if ($(this).scrollTop() < 800) {
    //       $('.tape').fadeOut(1000);
    //     }
    //     if ($(this).scrollTop() > 2800) {
    //       $('.forum__register').fadeIn(700).css("display", "flex");
    //       $('.forum__feed').fadeIn(1500).css("display", "flex");
    //     } if ($(this).scrollTop() < 2800) {
    //       $('.forum__register').fadeOut(1000);
    //       $('.forum__feed').fadeOut(1000);
    //     }
    //   });

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;

      });
    }
  });
});
