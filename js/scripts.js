$(document).ready(function(){
  $(".container").fadeIn(700);

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.home__top').fadeIn(900);
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
      if ($(this).scrollTop() > 80) {
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
