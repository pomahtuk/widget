(function() {
  $(function() {
    var applyFilterSign, drawFiltered, dropDownToggler, filterElements, userArray;
    applyFilterSign = $('#check');
    dropDownToggler = $('.dropdown > .dropdown-toggler');
    userArray = [];
    $('#container table tr').each(function(index, row) {
      row = $(row);
      return row.find('td').each(function(index, user) {
        var userElem;
        userElem = $(user).find('.details');
        user = {
          name: userElem.find('h3').text().trim(),
          text: userElem.find('p').text().trim(),
          lang: userElem.data('language')
        };
        return userArray.push(user);
      });
    });
    drawFiltered = function(array) {
      return true;
    };
    filterElements = function() {
      var array;
      array = [];
      if (applyFilterSign.is(':checked')) {
        array = $.grep(userArray, function(element, index) {
          return element.lang === dropDownToggler.text().trim();
        });
      } else {
        array = userArray;
      }
      drawFiltered(array);
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
