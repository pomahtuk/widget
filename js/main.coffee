$ ->

  applyFilterSign = $('#check')
  dropDownToggler = $('.dropdown > .dropdown-toggler')

  #create userArray based on markup
  userArray = []
  $('#container table tr').each (index, row) ->
    row       = $ row
    row.find('td').each (index, user) ->
      userElem = $(user).find('.details')
      user = 
        name: userElem.find('h3').text().trim()
        text: userElem.find('p').text().trim()
        lang: userElem.data('language')
      userArray.push user

  drawFiltered = (array) ->
    # console.log array
    # replace table content
    true

  filterElements = ->
    array = []
    if applyFilterSign.is(':checked')
      array = $.grep userArray, (element, index) ->
        element.lang == dropDownToggler.text().trim()
    else
      array = userArray
    drawFiltered(array)
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