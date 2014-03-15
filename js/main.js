(function() {
  $(function() {
    $('#container').tinyscrollbar();
    $('.dropdown > .dropdown-toggler').click(function() {
      var elem;
      elem = $(this);
      if (elem.hasClass('active')) {
        elem.next('.dropdown-content').slideUp(100);
        return elem.removeClass('active');
      } else {
        elem.next('.dropdown-content').slideDown(100);
        return elem.addClass('active');
      }
    });
    $('.dropdown > .dropdown-content .variant').click(function() {
      var elem, opener, parent, text;
      elem = $(this);
      text = elem.text();
      parent = elem.parent();
      opener = parent.prev('.dropdown-toggler');
      opener.find('.val').text(text);
      parent.slideUp(100);
      return opener.removeClass('active');
    });
    return $('.tabs a').click(function() {
      var link, target;
      link = $(this);
      $('.tabs a').removeClass('active');
      link.addClass('active');
      target = link.attr('href').split('#')[1];
      $('.content > div').removeClass('active');
      return $(".content ." + target + "-content").addClass('active');
    });
  });

}).call(this);
