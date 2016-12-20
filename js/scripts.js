$(document).ready(function(){

  $(window).scroll(function() {
      if ($(this).scrollTop() > 800) {
        $('.home__top').fadeIn(600);
      } else {
        $('.home__top').fadeOut(600);
      }
    });

  $('.home__top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 500);
  });

  $("#header__click").on('click', function() {

    $("#header__click--show").fadeIn(600);

  })

  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header__click--show').fadeOut(600);
      }
    });

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
