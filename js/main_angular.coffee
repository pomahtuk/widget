angular.module('myApp', ['ngAnimate'])

.controller 'WidgetController', ($scope) ->
  # hardcode desired response
  users = [
    {
      name: 'Анжелика'
      title: 'Очень длинное сообщение'
      language: 'Русский'
    }
    {
      name: 'Анастасия'
      title: 'Очень длинное сообщение'
      language: 'Немецкий'
    }
    {
      name: 'Евгения'
      title: 'Очень длинное сообщение'
      language: 'Французский'
    }
    {
      name: 'Анна'
      title: 'Очень длинное сообщение'
      language: 'Английский'
    }
    {
      name: 'Екатерина'
      title: 'Очень длинное сообщение'
      language: 'Английский'
    }
    {
      name: 'Ольга'
      title: 'Очень длинное сообщение'
      language: 'Русский'
    }
    {
      name: 'Ирина'
      title: 'Очень длинное сообщение'
      language: 'Русский'
    }
    {
      name: 'Марина'
      title: 'Очень длинное сообщение'
      language: 'Русский'
    }
  ]

  $scope.users  = users

  #scrollbar intagration
  $scope.scrollbarUpdate = ->
    $('.nano').nanoScroller
      iOSNativeScrolling: true
      sliderMaxHeight: 180
    true

  filterUsers = ->
    if $scope.applyFilter is true
      # using jQyery function to filter values
      $scope.users = $.grep users, (element, index) ->
        element.language == $scope.currentLang
    else
      $scope.users = users

  $scope.$watch 'applyFilter', (newVal, oldVal) ->
    if newVal?
      filterUsers()
      
  $scope.$watch 'currentLang', (newVal, oldVal) ->
    if newVal?
      filterUsers()

.directive 'onFinishRender', ($timeout) ->
  restrict: 'A'
  link: (scope, element, attr) ->
    if scope.$last
      $timeout ->
        scope.$evalAsync attr.onFinishRender
      , 0