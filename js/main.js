(function() {
  $(function() {
    var applyFilterSign, dropDownToggler, filterElements, usersElements;
    applyFilterSign = $('#check');
    dropDownToggler = $('.dropdown > .dropdown-toggler');
    usersElements = $('#container .user-block');
    filterElements = function() {
      var array;
      array = [];
      if (applyFilterSign.is(':checked')) {
        usersElements.hide();
        usersElements.filter("[data-language=" + (dropDownToggler.text().trim()) + "]").show();
      } else {
        usersElements.show();
      }
      return true;
    };
    $('.nano').nanoScroller({
      iOSNativeScrolling: true,
      sliderMaxHeight: 180
    });
    dropDownToggler.click(function() {
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
      var elem, parent, text;
      elem = $(this);
      text = elem.text();
      parent = elem.parent();
      dropDownToggler.find('.val').text(text).removeClass('active');
      parent.slideUp(100);
      return filterElements();
    });
    applyFilterSign.change(filterElements);
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
