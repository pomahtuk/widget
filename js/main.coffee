$ ->

  applyFilterSign = $('#check')
  dropDownToggler = $('.dropdown > .dropdown-toggler')
  usersElements   = $('#container .user-block')

  filterElements = ->
    array = []
    if applyFilterSign.is(':checked')
      usersElements.hide()
      usersElements.filter("[data-language=#{dropDownToggler.text().trim()}]").show()
    else
      usersElements.show()
    true

  $('.nano').nanoScroller
    iOSNativeScrolling: true
    sliderMaxHeight: 180

  dropDownToggler.click ->
    elem = $ @
    if elem.hasClass 'active'
      elem.next('.dropdown-content').slideUp(100)
      elem.removeClass 'active'
    else
      elem.next('.dropdown-content').slideDown(100)
      elem.addClass 'active'

  $('.dropdown > .dropdown-content .variant').click ->
    elem    = $ @
    text    = elem.text()
    parent  = elem.parent()
    dropDownToggler.find('.val').text(text).removeClass 'active'
    parent.slideUp(100)
    filterElements()

  applyFilterSign.change filterElements

  $('.tabs a').click ->
    link = $ @
    $('.tabs a').removeClass 'active'
    link.addClass 'active'
    target = link.attr('href').split('#')[1]
    $('.content > div').removeClass 'active'
    $(".content .#{target}-content").addClass 'active'