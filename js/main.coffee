$ ->
  # figure out the problem
  $('#container').tinyscrollbar()
  container = $('#container').data("plugin_tinyscrollbar")
  
  setTimeout ->
    container.update()
  , 100

  $('.dropdown > .dropdown-toggler').click ->
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
    opener  = parent.prev('.dropdown-toggler')
    opener.find('.val').text text
    parent.slideUp(100)
    opener.removeClass 'active'

  $('.tabs a').click ->
    link = $ @
    $('.tabs a').removeClass 'active'
    link.addClass 'active'
    target = link.attr('href').split('#')[1]
    $('.content > div').removeClass 'active'
    $(".content .#{target}-content").addClass 'active'