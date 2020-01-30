 $('.navbar-brand').on('click', function (event) {
      event.preventDefault();

      var anchorY = $($(this).attr('href')).offset().top
        var offsetY = 0;
    

      if ((Math.abs(window.scrollY-anchorY)) < 1000) {
          $('html, body').animate({
              scrollTop: anchorY - offsetY
          }, Math.abs(window.scrollY-anchorY)*0.5, 'linear');
      } else {
          $('html, body').animate({
              scrollTop: anchorY - offsetY
          }, 500, 'linear');
      }

  });