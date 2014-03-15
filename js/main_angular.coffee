angular.module('myApp', ['ngAnimate'])

.controller 'WidgetController', ($scope) ->
  # hardcode desired response
  users = [
    {
      name: 'Анжелика'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Анастасия'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Евгения'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Анна'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Екатерина'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Ольга'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Ирина'
      title: 'Очень длинное сообщение'
    }
    {
      name: 'Марина'
      title: 'Очень длинное сообщение'
    }
  ]

  # transform response to rows
  rows = []

  for user, index in users by 2
    row = [
      users[index]
      users[index + 1]
    ]
    rows.push row

  $scope.rows   = rows
  $scope.users  = users

  # initial value
  $scope.currentLang  = 'Русский'
  $scope.activeTab    = 'users'

  #scrollbar intagration
  $scope.scrollbarUpdate = ->
    if $scope.scrollbarAPI?
      $scope.scrollbarAPI.update()
    else
      $('#container').tinyscrollbar()
      $scope.scrollbarAPI = $('#box').data("plugin_tinyscrollbar")

.directive 'onFinishRender', ($timeout) ->
  restrict: 'A'
  link: (scope, element, attr) ->
    if scope.$last
      $timeout ->
        scope.$evalAsync attr.onFinishRender
      , 0